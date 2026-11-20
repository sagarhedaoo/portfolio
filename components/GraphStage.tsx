"use client";

import { useCallback, useEffect, useRef } from "react";
import type { Graph } from "@cosmos.gl/graph";
import gsap from "gsap";
import { graphData, kindColor } from "@/lib/graph";
import { getState, setState, useStore } from "@/lib/store";

const { nodes, pairs, indexOf, neighbours } = graphData;
const SPACE = 4096;
const fitPadding = () => (innerWidth < 960 ? 0.08 : 0.2); // fraction of the canvas left empty on each side

function rgba(hex: string, alpha = 1) {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255, alpha];
}

function pointSize(i: number) {
  const n = nodes[i];
  if (n.kind === "role") return 28;
  if (n.kind === "project") return 12 + Math.sqrt(n.degree) * 1.5;
  return 5 + Math.sqrt(n.degree) * 2.4;
}

// Skills used only once or twice keep their label hidden until something points at them.
const quietLabel = nodes.map((n) => n.kind === "skill" && n.degree <= 2);

function linksTouching(set: Set<number>, anchor: number) {
  const out: number[] = [];
  pairs.forEach(([a, b], li) => {
    if ((a === anchor && set.has(b)) || (b === anchor && set.has(a))) out.push(li);
  });
  return out;
}

export default function GraphStage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<Graph | null>(null);
  const hoverRef = useRef<number | null>(null);
  const fitKeyRef = useRef<string | null>(null);

  const selected = useStore((s) => s.selected);
  const spotlight = useStore((s) => s.spotlight);
  const kind = useStore((s) => s.kind);
  const exploring = useStore((s) => s.exploring);

  const apply = useCallback((fit: boolean) => {
    const graph = graphRef.current;
    if (!graph) return;
    const { selected, spotlight, kind } = getState();

    // A selection holds the highlight; hover only previews when nothing is selected.
    const hovered = hoverRef.current !== null ? nodes[hoverRef.current].id : null;
    const anchorId = selected ?? hovered ?? spotlight;
    let lit: Set<number> | null = null;
    let links: number[] | undefined;
    let anchor: number | undefined;

    if (anchorId) {
      anchor = indexOf.get(anchorId)!;
      lit = new Set([anchor, ...neighbours[anchor]]);
      links = linksTouching(lit, anchor);
    } else if (kind) {
      lit = new Set(nodes.flatMap((n, i) => (n.kind === kind ? [i] : [])));
      links = [];
    }

    graph.setConfigPartial({
      highlightedPointIndices: lit ? [...lit] : undefined,
      highlightedLinkIndices: links,
      focusedPointIndex: selected ? indexOf.get(selected) : undefined,
    });

    const labels = labelsRef.current?.children;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        const el = labels[i] as HTMLElement;
        el.dataset.state = lit ? (lit.has(i) ? "lit" : "dim") : quietLabel[i] ? "quiet" : "idle";
      }
    }

    if (!fit) return;
    const focusId = selected ?? spotlight;
    if (focusId === fitKeyRef.current) return;
    fitKeyRef.current = focusId;
    if (focusId) {
      const i = indexOf.get(focusId)!;
      graph.fitViewByPointIndices([i, ...neighbours[i]], 900, fitPadding() + 0.08);
    } else {
      graph.fitView(900, fitPadding());
    }
  }, []);

  useEffect(() => {
    apply(true);
  }, [apply, selected, spotlight, kind]);

  // Entering or leaving explore mode resizes the canvas; refit once it has settled.
  useEffect(() => {
    const id = setTimeout(() => graphRef.current?.fitView(600, fitPadding()), 120);
    return () => clearTimeout(id);
  }, [exploring]);

  // On wide screens the detail panel covers the right edge, so move the map out from under it.
  useEffect(() => {
    if (!matchMedia("(min-width: 960px)").matches) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(".stage", { x: selected ? -Math.min(440, innerWidth) * 0.6 : 0, duration: reduce ? 0 : 0.9, ease: "expo.out" });
  }, [selected]);

  useEffect(() => {
    let cancelled = false;
    let frame = 0;
    let graph: Graph | null = null;
    const timers: ReturnType<typeof setTimeout>[] = [];

    (async () => {
      const { Graph } = await import("@cosmos.gl/graph");
      const host = hostRef.current;
      if (cancelled || !host) return;

      const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const count = nodes.length;
      const positions = new Float32Array(count * 2);
      const colors = new Float32Array(count * 4);
      const sizes = new Float32Array(count);

      // Start everything packed near the centre so the first simulation run
      // unfolds the graph: that unfolding is the page's opening moment.
      const spread = reduceMotion ? 900 : 40;
      nodes.forEach((n, i) => {
        const angle = (i / count) * Math.PI * 2 * 7;
        const r = spread * (0.3 + ((i * 7919) % 97) / 97);
        positions[i * 2] = SPACE / 2 + Math.cos(angle) * r;
        positions[i * 2 + 1] = SPACE / 2 + Math.sin(angle) * r;
        colors.set(rgba(kindColor[n.kind]), i * 4);
        sizes[i] = pointSize(i) * (innerWidth < 640 ? 0.7 : 1);
      });

      graph = new Graph(host, {
        spaceSize: SPACE,
        backgroundColor: [0, 0, 0, 0],
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        rescalePositions: false,
        enableZoom: false,
        enableDrag: true,
        fitViewOnInit: true,
        fitViewDelay: reduceMotion ? 0 : 1400,
        fitViewDuration: 1200,
        fitViewPadding: fitPadding(),
        scalePointsOnZoom: false,
        pointGreyoutOpacity: 0.14,
        pointDefaultStrokeWidth: 0,
        renderHoveredPointRing: true,
        hoveredPointRingColor: "#f1eaf3",
        focusedPointRingColor: "#f1eaf3",
        hoveredPointCursor: "pointer",
        linkDefaultColor: "#8b7697",
        linkOpacity: 0.32,
        linkGreyoutOpacity: 0.04,
        linkDefaultWidth: 1,
        linkWidthScale: 1,
        scaleLinksOnZoom: false,
        curvedLinks: true,
        linkVisibilityMinTransparency: 0.6,
        simulationGravity: 0.18,
        simulationCenter: 0.4,
        simulationRepulsion: 2.2,
        simulationLinkSpring: 0.9,
        simulationLinkDistance: 26,
        simulationFriction: 0.86,
        simulationDecay: reduceMotion ? 600 : 4200,
        simulationCollision: 0.6,
        simulationCollisionPadding: 6,
        attribution: "",
        onPointMouseOver: (i) => {
          hoverRef.current = i;
          apply(false);
        },
        onPointMouseOut: () => {
          hoverRef.current = null;
          apply(false);
        },
        onPointClick: (i) => setState({ selected: nodes[i].id }),
        onBackgroundClick: () => setState({ selected: null }),
        // The layout keeps growing after the first fit; frame it again once it settles.
        onSimulationEnd: () => {
          const { selected, spotlight } = getState();
          if (!selected && !spotlight) graph?.fitView(800, fitPadding());
        },
      });

      graph.setPointPositions(positions);
      graph.setPointColors(colors);
      graph.setPointSizes(sizes);
      graph.setLinks(new Float32Array(pairs.flat()));
      graph.trackPointPositionsByIndices(nodes.map((_, i) => i));
      graph.render();
      graphRef.current = graph;
      if (process.env.NODE_ENV !== "production") (window as unknown as { __graph: Graph }).__graph = graph;
      await graph.ready;
      if (cancelled) return;
      host.dataset.ready = "true";
      apply(false);

      // Reframe while the opening layout is still expanding.
      const refit = () => {
        const { selected, spotlight } = getState();
        if (!cancelled && !selected && !spotlight) graph?.fitView(1100, fitPadding());
      };
      timers.push(setTimeout(refit, 2600), setTimeout(refit, 5200));

      const labels = [...labelsRef.current!.children] as HTMLElement[];
      const widths = labels.map((el) => el.offsetWidth);
      const heights = labels.map((el) => el.offsetHeight);
      const rank = { role: 0, project: 1, skill: 2 };
      const boxes = new Float32Array(count * 4);

      const tick = () => {
        const map = graph!.getTrackedPointPositionsMap({ nonBlocking: true });
        // Lit labels claim space first, then roles, projects and skills;
        // any label that would overlap one already placed is hidden this frame.
        const order = nodes
          .map((_, i) => i)
          .sort((a, b) => {
            const la = labels[a].dataset.state === "lit" ? 0 : 1;
            const lb = labels[b].dataset.state === "lit" ? 0 : 1;
            return la - lb || rank[nodes[a].kind] - rank[nodes[b].kind];
          });
        let placed = 0;
        for (const i of order) {
          const el = labels[i];
          const pos = map.get(i);
          if (!pos) continue;
          const [px, py] = graph!.spaceToScreenPosition(pos);
          const x = px + sizes[i] / 2 + 6;
          const y = py - heights[i] / 2;
          el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;

          const state = el.dataset.state;
          if (state === "quiet" || state === "dim") continue;
          let clear = true;
          for (let k = 0; k < placed && clear; k++) {
            const o = k * 4;
            clear = x > boxes[o + 2] || x + widths[i] < boxes[o] || y > boxes[o + 3] || y + heights[i] < boxes[o + 1];
          }
          el.dataset.hidden = clear ? "" : "true";
          if (clear) {
            boxes.set([x - 2, y - 1, x + widths[i] + 2, y + heights[i] + 1], placed * 4);
            placed++;
          }
        }
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      cancelAnimationFrame(frame);
      graph?.destroy();
      graphRef.current = null;
    };
  }, [apply]);

  return (
    <div className="stage" data-exploring={exploring || undefined} aria-hidden="true">
      <div ref={hostRef} className="stage-canvas" />
      <div ref={labelsRef} className="stage-labels">
        {nodes.map((n) => (
          <span key={n.id} className="node-label" data-kind={n.kind}>
            {n.label}
          </span>
        ))}
      </div>
    </div>
  );
}
