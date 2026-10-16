"use client";

import { useState } from "react";
import { playlists, links } from "@/data/content";

export function Music() {
  const [active, setActive] = useState(playlists[0]);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] items-start">
      <div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={playing ? "Pause record" : "Spin record"}
            onClick={() => setPlaying((p) => !p)}
            className="relative size-28 shrink-0 cursor-pointer"
          >
            <div
              className={`vinyl ${playing ? "" : "paused"} relative size-28 overflow-hidden rounded-full bg-ink shadow-xl`}
              style={{ backgroundImage: "repeating-radial-gradient(circle, #1f2a44 0 2px, #2b3858 2px 4px)" }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: "conic-gradient(from 20deg, transparent 0 60deg, rgba(255,255,255,0.14) 90deg, transparent 120deg 240deg, rgba(255,255,255,0.08) 270deg, transparent 300deg)" }}
              />
              <div className="absolute inset-0 m-auto size-14 rounded-full bg-pink ring-4 ring-paper">
                <svg viewBox="0 0 24 24" aria-hidden className="absolute inset-0 m-auto size-7 text-ink">
                  <ellipse cx="9" cy="17.5" rx="3.6" ry="2.6" transform="rotate(-20 9 17.5)" fill="currentColor" />
                  <path d="M12.3 16.6V4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M12.3 4.5c3.2.9 5.4 3 4.6 6.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <svg viewBox="0 0 56 56" aria-hidden className="absolute inset-0 size-14 text-burgundy/70">
                  <path d="M28 5a23 23 0 0 1 20 11.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </button>
          <div>
            <p className="text-sm uppercase tracking-widest text-muted">Spinning now</p>
            <p className="font-serif text-2xl italic">{active.name}</p>
            <div className={`eq mt-2 flex items-end gap-1 ${playing ? "" : "paused"}`}>
              <span /><span /><span /><span />
            </div>
          </div>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {playlists.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => { setActive(p); setPlaying(true); }}
                className={`rounded-full border px-3 py-1 text-sm transition-colors cursor-pointer ${
                  active.id === p.id ? "border-burgundy bg-burgundy text-paper" : "border-ink/20 hover:border-burgundy hover:text-burgundy"
                }`}
              >
                {p.name}
              </button>
            </li>
          ))}
        </ul>
        <a href={links.spotifyProfile} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-burgundy underline-offset-4 hover:underline">
          All my playlists on Spotify →
        </a>
      </div>
      <iframe
        key={active.id}
        title={`Spotify playlist: ${active.name}`}
        src={`https://open.spotify.com/embed/playlist/${active.id}?utm_source=generator&theme=0`}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-2xl shadow-lg"
      />
    </div>
  );
}
