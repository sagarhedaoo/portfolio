import { projects, roles, skills } from "./content";

export type NodeKind = "role" | "project" | "skill";

export type GraphNode = {
  id: string;
  label: string;
  kind: NodeKind;
  degree: number;
};

export const kindColor: Record<NodeKind, string> = {
  role: "#ef7a9c",
  project: "#f5b83d",
  skill: "#8fc7d6",
};

export const kindName: Record<NodeKind, string> = {
  role: "Role",
  project: "Project",
  skill: "Skill",
};

const nodes: GraphNode[] = [
  ...roles.map((r) => ({ id: r.id, label: r.short ?? r.org, kind: "role" as const, degree: 0 })),
  ...projects.map((p) => ({ id: p.id, label: p.title, kind: "project" as const, degree: 0 })),
  ...skills.map((s) => ({ id: s.id, label: s.label, kind: "skill" as const, degree: 0 })),
];

const indexOf = new Map(nodes.map((n, i) => [n.id, i]));
const pairs: [number, number][] = [];

for (const item of [...roles, ...projects]) {
  const from = indexOf.get(item.id)!;
  for (const skillId of item.stack) {
    const to = indexOf.get(skillId);
    if (to === undefined) throw new Error(`Unknown skill "${skillId}" in ${item.id}`);
    pairs.push([from, to]);
  }
}

const neighbours = nodes.map(() => new Set<number>());
for (const [a, b] of pairs) {
  neighbours[a].add(b);
  neighbours[b].add(a);
  nodes[a].degree++;
  nodes[b].degree++;
}

export const graphData = { nodes, pairs, indexOf, neighbours };

export function neighbourIds(id: string): string[] {
  const i = indexOf.get(id);
  if (i === undefined) return [];
  return [...neighbours[i]].map((j) => nodes[j].id);
}

export function nodeById(id: string): GraphNode | undefined {
  const i = indexOf.get(id);
  return i === undefined ? undefined : nodes[i];
}

export const counts = {
  role: roles.length,
  project: projects.length,
  skill: skills.length,
};

// Skills that show up alongside this one most often across roles and projects.
export function pairedSkills(id: string, limit = 6): string[] {
  const tally = new Map<string, number>();
  for (const item of neighbourIds(id)) {
    for (const other of neighbourIds(item)) {
      if (other !== id) tally.set(other, (tally.get(other) ?? 0) + 1);
    }
  }
  return [...tally.entries()]
    .filter(([, n]) => n > 1)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([skill]) => skill);
}
