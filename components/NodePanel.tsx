"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects, roles, skills } from "@/lib/content";
import { kindColor, kindName, neighbourIds, nodeById, pairedSkills } from "@/lib/graph";
import { setState, useStore } from "@/lib/store";

function NodeButton({ id }: { id: string }) {
  const node = nodeById(id);
  if (!node) return null;
  return (
    <button type="button" className="chip" onClick={() => setState({ selected: id })}>
      <span className="dot" style={{ background: kindColor[node.kind] }} />
      {node.label}
    </button>
  );
}

function Body({ id }: { id: string }) {
  const role = roles.find((r) => r.id === id);
  if (role) {
    return (
      <>
        <p className="panel-meta">
          {role.title}, {role.period}
        </p>
        <ul className="panel-points">
          {role.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <h3 className="panel-sub">Worked with</h3>
        <div className="chips">
          {role.stack.map((s) => (
            <NodeButton key={s} id={s} />
          ))}
        </div>
      </>
    );
  }

  const project = projects.find((p) => p.id === id);
  if (project) {
    return (
      <>
        <p className="panel-lede">{project.summary}</p>
        {project.image && (
          <Image
            className="panel-image"
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={720}
            height={450}
            sizes="(max-width: 720px) 100vw, 420px"
          />
        )}
        {project.points && (
          <ul className="panel-points">
            {project.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
        {project.links.length > 0 && (
          <p className="panel-links">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </p>
        )}
        <h3 className="panel-sub">Built with</h3>
        <div className="chips">
          {project.stack.map((s) => (
            <NodeButton key={s} id={s} />
          ))}
        </div>
      </>
    );
  }

  const skill = skills.find((s) => s.id === id);
  if (!skill) return null;
  const users = neighbourIds(id);
  const usedInRoles = users.filter((u) => nodeById(u)?.kind === "role");
  const usedInProjects = users.filter((u) => nodeById(u)?.kind === "project");
  const paired = pairedSkills(id);
  return (
    <>
      <p className="panel-meta">{skill.group}</p>
      <p className="panel-lede">{skill.note}</p>
      {usedInRoles.length > 0 && (
        <>
          <h3 className="panel-sub">Used at work</h3>
          <ul className="panel-uses">
            {usedInRoles.map((u) => {
              const role = roles.find((r) => r.id === u)!;
              return (
                <li key={u}>
                  <button type="button" onClick={() => setState({ selected: u })}>
                    <span className="dot" style={{ background: kindColor.role }} />
                    <span>
                      <strong>{role.org}</strong>
                      <span>
                        {role.title}, {role.period}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {usedInProjects.length > 0 && (
        <>
          <h3 className="panel-sub">Used in projects</h3>
          <ul className="panel-uses">
            {usedInProjects.map((u) => {
              const project = projects.find((p) => p.id === u)!;
              return (
                <li key={u}>
                  <button type="button" onClick={() => setState({ selected: u })}>
                    <span className="dot" style={{ background: kindColor.project }} />
                    <span>
                      <strong>{project.title}</strong>
                      <span>{project.summary}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {paired.length > 0 && (
        <>
          <h3 className="panel-sub">Often paired with</h3>
          <div className="chips">
            {paired.map((p) => (
              <NodeButton key={p} id={p} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default function NodePanel() {
  const selected = useStore((s) => s.selected);
  const panelRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mountedRef = useRef(false);
  // Keep the last node on screen while the panel slides out.
  const [shownId, setShownId] = useState(selected);
  if (selected && selected !== shownId) setShownId(selected);
  const open = Boolean(selected);
  const node = shownId ? nodeById(shownId) : undefined;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          wide: "(min-width: 960px)",
          narrow: "(max-width: 959px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { wide, reduce } = ctx.conditions!;
          const hidden = wide ? { xPercent: 104 } : { yPercent: 104 };
          const shown = { xPercent: 0, yPercent: 0 };
          gsap.to(panelRef.current, {
            ...(open ? shown : hidden),
            duration: reduce || !mountedRef.current ? 0 : open ? 0.55 : 0.35,
            ease: open ? "expo.out" : "power2.in",
          });
          if (open && !reduce) {
            gsap.from(".panel-inner > *", { y: 14, opacity: 0, stagger: 0.04, duration: 0.45, ease: "power3.out", delay: 0.08 });
          }
        },
      );
      mountedRef.current = true;
    },
    { scope: panelRef, dependencies: [selected] },
  );

  useEffect(() => {
    if (!selected) return;
    headingRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setState({ selected: null });
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <aside ref={panelRef} className="panel" aria-label="Details" aria-hidden={!open} inert={!open}>
      {node && (
        <div className="panel-inner" key={node.id}>
          <div className="panel-top">
            <span className="panel-kind">
              <span className="dot" style={{ background: kindColor[node.kind] }} />
              {kindName[node.kind]}
            </span>
            <button type="button" className="panel-close" onClick={() => setState({ selected: null })}>
              Close
            </button>
          </div>
          <h2 ref={headingRef} tabIndex={-1} className="panel-title">
            {node.kind === "role" ? roles.find((r) => r.id === node.id)?.org : node.label}
          </h2>
          <Body id={node.id} />
        </div>
      )}
    </aside>
  );
}
