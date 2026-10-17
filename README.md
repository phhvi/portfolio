# vi.

Personal site of Vi Phan - software engineer, cyclist, dream-pop listener. Live at
https://portfolio-seven-eosin-nu7rwsostq.vercel.app

Next.js 16 (App Router) + Tailwind 4 + [motion](https://motion.dev). One static page, no backend.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # what Vercel runs on every push to main
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/content.ts` | All copy: links, Now list, playlists, projects, experience. Edit this first. |
| `src/app/page.tsx` | The page and its sections (hero, Now, Work, Experience, Off-screen, Music, Contact). |
| `src/app/globals.css` | Colour tokens (`--paper`, `--ink`, `--pink`, `--burgundy`), fonts, vinyl/equaliser keyframes. |
| `src/app/layout.tsx` | Fonts (Inter + Fraunces via `next/font`) and page metadata. |
| `src/components/Road.tsx` | Dotted road in the margin + scroll-driven cyclist. Sections marked `data-stop` become stops. |
| `src/components/Reveal.tsx`, `Words.tsx` | Scroll-in fade and word-by-word headline reveal. |
| `src/components/Music.tsx` | Vinyl toggle, playlist chips, official Spotify embed (no API keys). |
| `public/` | `images/vi-bike.png` (hero cutout) and `Vi_Phan_CV.pdf` (Download CV button). |

## Deploy

Connected to Vercel; every push to `main` redeploys. Branch pushes get a preview URL.
