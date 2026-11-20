"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import GraphStage from "./GraphStage";
import NodePanel from "./NodePanel";
import { certificates, contact, education, projects, roles, skills, type SkillGroup } from "@/lib/content";
import { counts, kindColor, type NodeKind } from "@/lib/graph";
import { setState, useStore } from "@/lib/store";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const legend: { kind: NodeKind; label: string }[] = [
  { kind: "role", label: "Roles" },
  { kind: "project", label: "Projects" },
  { kind: "skill", label: "Skills" },
];

const groups = [...new Set(skills.map((s) => s.group))] as SkillGroup[];

// Hovering a row lights its node on the map.
const spot = (id: string | null) => () => setState({ spotlight: id });

function Header() {
  return (
    <header className="site-header" data-intro>
      <a className="wordmark" href="#top">
        Sagar Hedaoo
      </a>
      <nav aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href={contact.resume} target="_blank" rel="noreferrer">
          Résumé
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const kind = useStore((s) => s.kind);
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title" className="hero-title">
          I build AI and data systems for finance, and the interfaces people use to trust them.
        </h1>
        <p className="hero-sub" data-intro>
          Senior full-stack and Databricks engineer at Scalata AI. Knowledge graphs, RAG, lakehouse
          pipelines and the React front ends on top.
        </p>
        <div className="legend" role="group" aria-label="Highlight on the map" data-intro>
          {legend.map((l) => (
            <button
              key={l.kind}
              type="button"
              aria-pressed={kind === l.kind}
              onClick={() => setState({ kind: kind === l.kind ? null : l.kind, selected: null })}
            >
              <span className="dot" style={{ background: kindColor[l.kind] }} />
              {l.label}
              <span className="count">{counts[l.kind]}</span>
            </button>
          ))}
        </div>
        <button type="button" className="explore-open" onClick={() => setState({ exploring: true })} data-intro>
          Explore the map
        </button>
      </div>
      <p className="hero-hint" data-intro>
        This is my work as a graph. Drag a node to pull on it, click one to see what it connects to.
      </p>
    </section>
  );
}

function Work() {
  const own = projects.filter((p) => p.kind === "project");
  const oss = projects.filter((p) => p.kind === "oss");
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <h2 id="work-title" className="section-title">
        Work
      </h2>
      <ol className="work-list">
        {own.map((p) => (
          <li key={p.id} className="work-row" data-node={p.id} onMouseEnter={spot(p.id)}>
            <button type="button" className="work-title" onClick={() => setState({ selected: p.id })}>
              {p.title}
            </button>
            <p className="work-summary">{p.summary}</p>
            <p className="work-stack">
              {p.stack.map((s) => skills.find((k) => k.id === s)!.label).join(", ")}
            </p>
            {p.links.length > 0 && (
              <p className="work-links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ol>

      <h3 className="section-sub">Open source</h3>
      <ul className="oss-list">
        {oss.map((p) => (
          <li key={p.id} data-node={p.id} onMouseEnter={spot(p.id)}>
            <button type="button" className="oss-name" onClick={() => setState({ selected: p.id })}>
              {p.title}
            </button>
            <span>{p.summary}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <h2 id="exp-title" className="section-title">
        Experience
      </h2>
      <ol className="timeline">
        {roles.map((r) => (
          <li key={r.id} className="timeline-row" data-node={r.id} onMouseEnter={spot(r.id)}>
            <p className="timeline-period">{r.period}</p>
            <div>
              <h3 className="timeline-org">
                <button type="button" onClick={() => setState({ selected: r.id })}>
                  {r.org}
                </button>
              </h3>
              <p className="timeline-title">{r.title}</p>
              <ul className="timeline-points">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="section-sub">Education</h3>
      <ul className="edu-list">
        {education.map((e) => (
          <li key={e.school}>
            <span className="timeline-period">{e.year}</span>
            <span>
              <strong>{e.school}</strong>
              <br />
              {e.degree}
              {e.note && <span className="muted">. {e.note}</span>}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        Skills
      </h2>
      <p className="section-lede">Every skill here is a node on the map. Pick one to see where I have used it.</p>
      <dl className="skill-groups">
        {groups.map((g) => (
          <div key={g} className="skill-group">
            <dt>{g}</dt>
            <dd>
              {skills
                .filter((s) => s.group === g)
                .map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className="skill"
                    onMouseEnter={spot(s.id)}
                    onFocus={spot(s.id)}
                    onClick={() => setState({ selected: s.id })}
                  >
                    {s.label}
                  </button>
                ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Certificates() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<(typeof certificates)[number] | null>(null);

  useEffect(() => {
    if (open) dialogRef.current?.showModal();
  }, [open]);

  return (
    <section className="section" id="certificates" aria-labelledby="cert-title">
      <h2 id="cert-title" className="section-title">
        Certificates
      </h2>
      <ul className="cert-list">
        {certificates.map((c) => (
          <li key={c.title}>
            <span className="timeline-period">{c.year}</span>
            <button type="button" onClick={() => setOpen(c)}>
              <strong>{c.issuer}</strong>
              <span>{c.title}</span>
            </button>
          </li>
        ))}
      </ul>
      <dialog
        ref={dialogRef}
        className="cert-dialog"
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
      >
        {open && (
          <figure>
            <Image src={open.image} alt={`${open.issuer} certificate: ${open.title}`} width={1200} height={860} sizes="(max-width: 900px) 92vw, 860px" />
            <figcaption>
              <span>
                {open.issuer}, {open.title}
              </span>
              <button type="button" onClick={() => dialogRef.current?.close()}>
                Close
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">
        Contact
      </h2>
      <p className="section-lede">
        Hiring for AI, data or full-stack work? Email is the fastest way to reach me.
      </p>
      <a className="contact-email" href={`mailto:${contact.email}`}>
        {contact.email}
      </a>
      <p className="contact-links">
        <a href={contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={contact.resume} target="_blank" rel="noreferrer">
          Résumé (PDF)
        </a>
      </p>
    </section>
  );
}

function ExploreBar() {
  const exploring = useStore((s) => s.exploring);
  useEffect(() => {
    document.documentElement.dataset.exploring = exploring ? "true" : "";
  }, [exploring]);
  if (!exploring) return null;
  return (
    <div className="explore-bar">
      <span>Drag nodes, tap one for details.</span>
      <button type="button" onClick={() => setState({ exploring: false, selected: null })}>
        Back to page
      </button>
    </div>
  );
}

export default function Portfolio() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(".hero-title", { type: "lines", mask: "lines", linesClass: "line" });
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(split.lines, { yPercent: 105, duration: 1.3, stagger: 0.09 }, 0.25)
          .from("[data-intro]", { opacity: 0, y: 12, duration: 0.9, stagger: 0.08, ease: "power3.out" }, 0.75);
        return () => split.revert();
      });

      // Wide screens: the map slides right and the content takes the left column.
      mm.add("(min-width: 960px)", () => {
        gsap.set(".stage", { xPercent: 12 });
        gsap.to(".stage", {
          xPercent: 24,
          ease: "none",
          scrollTrigger: { trigger: "#work", start: "top bottom", end: "top 25%", scrub: 0.6 },
        });
        gsap.to(".sheet-backdrop", {
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: "#work", start: "top bottom", end: "top 40%", scrub: true },
        });
        gsap.to(".hero-copy, .hero-hint", {
          opacity: 0,
          y: -40,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom 35%", scrub: true },
        });
        ScrollTrigger.create({
          trigger: ".hero",
          start: "top top",
          end: "bottom 40%",
          onEnterBack: () => setState({ spotlight: null }),
        });
        gsap.utils.toArray<HTMLElement>("[data-node]").forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => self.isActive && setState({ spotlight: el.dataset.node! }),
          });
        });
        ScrollTrigger.create({
          trigger: "#certificates",
          start: "top 55%",
          onEnter: () => setState({ spotlight: null }),
        });
      });

      // Narrow screens: the map recedes behind the content.
      mm.add("(max-width: 959px)", () => {
        gsap.to(".stage", {
          opacity: 0.16,
          ease: "none",
          scrollTrigger: { trigger: "#work", start: "top bottom", end: "top 40%", scrub: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <a className="skip-link" href="#work">
        Skip to content
      </a>
      <GraphStage />
      <Header />
      <main>
        <Hero />
        <div className="sheet">
          <div className="sheet-backdrop" aria-hidden="true" />
          <Work />
          <Experience />
          <Skills />
          <Certificates />
          <Contact />
        </div>
      </main>
      <NodePanel />
      <ExploreBar />
    </div>
  );
}
