# Inbasekaran S. — Portfolio

Personal portfolio for **Inbasekaran S.** — Researcher · Reader · Author.

Third-year undergraduate at SRM Institute of Science and Technology (SRMIST) working on **LLM inference and memory systems** — context pruning, KV-cache management, and the information theory behind those choices. Founder of ILRL Labs, author of *Neither Living Nor Dying*.

**Live site:** <https://bruce12-glitch.github.io/my-portfolio/>

## Sections

- **Hero** — intro, external profiles (Scholar, GitHub, LinkedIn, blog)
- **Research** — EntroPrefill, Page-EntroKV and VendorChain, each with expandable technical notes
- **About** — quick facts and the reading shelf
- **Recognition** — awards and certifications
- **Experience & education / People & teamwork** — timelines
- **Writing** — *Neither Living Nor Dying: Reflection of the Middle*
- **Updates & Contact** — recent activity and copy-email contact

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui
- framer-motion (scroll reveals) · next-themes (light / dark)

## Getting started

```bash
bun install
bun run dev    # http://localhost:3000
bun run lint
```

## Deployment

The site is statically exported and published to **GitHub Pages** from the `gh-pages` branch:

```bash
bun run build:pages    # static export -> dist-pages/  (BUILD_TARGET=pages)
```

With `BUILD_TARGET=pages`, `next.config.ts` switches to export mode with `basePath: /my-portfolio`, trailing slashes and unoptimized images.

## Links

- Google Scholar — <https://scholar.google.com/citations?user=kNn4OZIAAAAJ>
- GitHub — <https://github.com/bruce12-glitch>
- LinkedIn — <https://www.linkedin.com/in/inbasekaran-s-106a90383>
- Blog (Neuroplastic) — <https://bruce12-glitch.github.io/Neuroplastic/>
- Book — <https://www.amazon.com/dp/B0HG7J6NSS>

---

Copyright (c) Inbasekaran S. All rights reserved.
