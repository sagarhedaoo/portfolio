"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { compactTokens, type AiUsage as Usage, type ProviderUsage } from "@/lib/ai-usage";

// Each provider gets one hue from the site palette; models step down in opacity.
const hue: Record<string, string> = { Claude: "239 122 156", Codex: "143 199 214" };
const shade = (name: string, i: number) => `rgb(${hue[name] ?? "241 234 243"} / ${Math.max(1 - i * 0.2, 0.22)})`;

function share(part: number, whole: number) {
  const pct = (part / whole) * 100;
  if (pct < 0.1) return "<0.1%";
  return `${pct < 10 ? pct.toFixed(1) : Math.round(pct)}%`;
}

function Provider({ p }: { p: ProviderUsage }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="usage-provider" onMouseLeave={() => setActive(null)}>
      <div className="usage-head">
        <h3>{p.name}</h3>
        <p>
          <span className="usage-total">{compactTokens(p.tokens)}</span> tokens
        </p>
      </div>
      <div className="usage-bar" role="img" aria-label={`${p.name} tokens by model`}>
        {p.models.map((m, i) => (
          <span
            key={m.model}
            style={{ flexGrow: m.tokens, background: shade(p.name, i) }}
            data-dim={active !== null && active !== m.model ? "" : undefined}
          />
        ))}
      </div>
      <ul className="usage-models">
        {p.models.map((m, i) => (
          <li
            key={m.model}
            onMouseEnter={() => setActive(m.model)}
            data-dim={active !== null && active !== m.model ? "" : undefined}
          >
            <span className="dot" style={{ background: shade(p.name, i) }} />
            <span className="usage-model">{m.label}</span>
            <span className="usage-num">{compactTokens(m.tokens)}</span>
            <span className="usage-num usage-share">{share(m.tokens, p.tokens)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AiUsage({ usage }: { usage: Usage }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".usage-bar span", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.05,
          scrollTrigger: { trigger: root.current, start: "top 70%", once: true },
        });
      });
    },
    { scope: root },
  );

  const updated = usage.updatedAt
    ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(usage.updatedAt))
    : null;

  return (
    <section ref={root} className="section" id="ai" aria-labelledby="ai-title">
      <h2 id="ai-title" className="section-title">
        Building with AI
      </h2>
      <p className="section-lede">
        I work alongside AI coding agents every day, for design, code and review. These are the tokens I have run
        through them, synced from my own machines by a usage tracker I built.
      </p>
      <div className="usage">
        {usage.providers.map((p) => (
          <Provider key={p.name} p={p} />
        ))}
      </div>
      {updated && <p className="usage-updated">Last synced {updated}. Counts cover the history on my devices only.</p>}
    </section>
  );
}
