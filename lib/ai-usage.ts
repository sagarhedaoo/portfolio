// Token totals from my AI usage tracker (github.com/sagarhedaoo/ai-usage-tracker).
// Fetched on the server and refreshed hourly; the section hides itself if the tracker is unreachable.

const USAGE_URL = process.env.AI_USAGE_URL ?? "https://ai-usage-tracker-woad.vercel.app/api/public.json";

export type ModelUsage = { model: string; label: string; tokens: number };
export type ProviderUsage = { name: string; tokens: number; models: ModelUsage[] };
export type AiUsage = { providers: ProviderUsage[]; updatedAt: string | null };

type RawProvider = { tokens: number | null; models: { model: string; tokens: number }[] };
type Raw = { claude?: RawProvider; codex?: RawProvider; updated_at?: string | null };

// "claude-haiku-4-5-20251001" -> "Haiku 4.5"
function claudeLabel(id: string) {
  const parts = id.replace(/^claude-/, "").split("-").filter((p) => !/^\d{8}$/.test(p));
  const words = parts.filter((p) => !/^\d+$/.test(p)).map((w) => w[0].toUpperCase() + w.slice(1));
  const version = parts.filter((p) => /^\d+$/.test(p)).join(".");
  return [...words, version].filter(Boolean).join(" ");
}

// "gpt-5.6-sol" -> "GPT-5.6 Sol"
function codexLabel(id: string) {
  const [family, version, ...rest] = id.split("-");
  const head = version ? `${family.toUpperCase()}-${version}` : family.toUpperCase();
  return [head, ...rest.map((w) => w[0].toUpperCase() + w.slice(1))].join(" ");
}

function provider(name: string, raw: RawProvider | undefined, label: (id: string) => string): ProviderUsage | null {
  if (!raw?.tokens) return null;
  return {
    name,
    tokens: raw.tokens,
    models: raw.models.filter((m) => m.tokens > 0).map((m) => ({ ...m, label: label(m.model) })),
  };
}

export async function getAiUsage(): Promise<AiUsage | null> {
  try {
    const res = await fetch(USAGE_URL, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;
    const raw = (await res.json()) as Raw;
    const providers = [provider("Claude", raw.claude, claudeLabel), provider("Codex", raw.codex, codexLabel)].filter(
      (p): p is ProviderUsage => p !== null,
    );
    return providers.length ? { providers, updatedAt: raw.updated_at ?? null } : null;
  } catch {
    return null;
  }
}

export function compactTokens(n: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumSignificantDigits: 3 }).format(n);
}
