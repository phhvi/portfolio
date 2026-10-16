"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

type Geo = { d: string; height: number; width: number; scale: number; stops: { x: number; y: number; id: string }[] };

function buildGeo(wrapper: HTMLElement): Geo {
  const width = wrapper.clientWidth;
  const height = wrapper.scrollHeight;
  const base = wrapper.getBoundingClientRect().top;
  const narrow = width < 768;
  const gutter = narrow ? 44 : Math.max(96, (width - 1024) / 2);
  const left = narrow ? 22 : 22;
  const right = narrow ? 34 : Math.min(gutter - 22, 96);
  const stops = Array.from(wrapper.querySelectorAll<HTMLElement>("[data-stop]")).map((el, i) => {
    const r = el.getBoundingClientRect();
    return { id: el.id, x: i % 2 === 0 ? left : right, y: r.top - base + Math.min(r.height / 2, 220) };
  });
  const pts = [{ x: left, y: 0 }, ...stops, { x: stops.length % 2 === 0 ? left : right, y: height }];
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    const cy = (a.y + b.y) / 2;
    d += ` C ${a.x} ${cy}, ${b.x} ${cy}, ${b.x} ${b.y}`;
  }
  return { d, height, width, scale: narrow ? 0.65 : 0.9, stops };
}

export function Road({ children }: { children: ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);
  const rider = useRef<SVGGElement>(null);
  const wheels = useRef<SVGGElement[]>([]);
  const [geo, setGeo] = useState<Geo | null>(null);
  const { scrollYProgress } = useScroll({ target: wrapper, offset: ["start 0.3", "end 0.85"] });

  const place = useCallback((p: number) => {
    const el = path.current, g = rider.current;
    if (!el || !g) return;
    const len = el.getTotalLength();
    if (!len) return;
    const t = Math.min(Math.max(p, 0), 1) * len;
    const a = el.getPointAtLength(Math.max(0, t - 3));
    const b = el.getPointAtLength(Math.min(len, t + 3));
    const here = el.getPointAtLength(t);
    const angle = Math.max(-25, Math.min(25, (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI - 90));
    g.setAttribute("transform", `translate(${here.x} ${here.y}) rotate(${angle})`);
    const spin = (t / 30) * 57.3;
    wheels.current.forEach((w) => w?.setAttribute("transform", `rotate(${spin})`));
  }, []);

  useLayoutEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const measure = () => setGeo(buildGeo(el));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("load", measure);
    return () => { ro.disconnect(); window.removeEventListener("load", measure); };
  }, []);

  useEffect(() => { place(scrollYProgress.get()); }, [geo, place, scrollYProgress]);
  useMotionValueEvent(scrollYProgress, "change", place);

  return (
    <div ref={wrapper} className="relative">
      {geo && (
        <svg aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-visible" width={geo.width} height={geo.height} viewBox={`0 0 ${geo.width} ${geo.height}`}>
          <path ref={path} d={geo.d} fill="none" stroke="var(--ink)" strokeOpacity="0.14" strokeWidth="2" strokeDasharray="2 9" strokeLinecap="round" />
          {geo.stops.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="pointer-events-auto">
              <circle cx={s.x} cy={s.y} r="5" fill="var(--paper)" stroke="var(--burgundy)" strokeOpacity="0.6" strokeWidth="2" />
            </a>
          ))}
          <g ref={rider} style={{ transition: "transform 120ms ease-out" }}>
            <g transform={`scale(${geo.scale}) translate(-36 -34)`} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <g transform="translate(14 40)">
                <g ref={(el) => { if (el) wheels.current[0] = el; }}>
                  <circle r="11" stroke="var(--ink)" strokeWidth="2.5" />
                  <path d="M0-11V11M-11 0H11M-7.8-7.8L7.8 7.8M7.8-7.8L-7.8 7.8" stroke="var(--ink)" strokeOpacity=".45" strokeWidth="1" />
                </g>
              </g>
              <g transform="translate(58 40)">
                <g ref={(el) => { if (el) wheels.current[1] = el; }}>
                  <circle r="11" stroke="var(--ink)" strokeWidth="2.5" />
                  <path d="M0-11V11M-11 0H11M-7.8-7.8L7.8 7.8M7.8-7.8L-7.8 7.8" stroke="var(--ink)" strokeOpacity=".45" strokeWidth="1" />
                </g>
              </g>
              <path d="M14 40L27 22h18l13 18M27 22l9 18H27M45 22l-5-7h7M36 40v-3" stroke="var(--burgundy)" strokeWidth="2.5" />
              <path d="M36 40l9-18M47 15l2-3" stroke="var(--burgundy)" strokeWidth="2.5" />
              <path d="M30 19l5-8 11-3 1 7M30 19l7 2M35 11l3 11M38 22l-6 12M38 22l2 12" stroke="var(--ink)" strokeWidth="3" />
              <ellipse cx="48" cy="5" rx="4.5" ry="5" fill="var(--ink)" />
              <path d="M44 4q4-4 8 0" stroke="var(--pink)" strokeWidth="2" />
            </g>
          </g>
          </svg>
      )}
      <div className="relative z-10 pl-10 md:pl-24 xl:pl-0">{children}</div>
    </div>
  );
}
