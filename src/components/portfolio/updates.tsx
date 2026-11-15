"use client"

import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

const UPDATES = [
  {
    date: "Oct. 2026",
    content: (
      <>
        I shared{" "}
        <a
          href="https://arxiv.org/abs/2610.09757"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-medium text-foreground"
        >
          EntroPrefill: Rényi-Guided Context Pruning with Conditional Stability Guarantees for
          Retrieval-Augmented Generation
        </a>{" "}
        on arXiv (<span className="font-mono text-xs">arXiv:2610.09757v1</span>).
      </>
    ),
  },
  {
    date: "Oct. 2026",
    content: (
      <>
        I shared{" "}
        <a
          href="https://arxiv.org/abs/2610.03135"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-medium text-foreground"
        >
          Page-EntroKV: Hardware-Aligned, Entropy-Weighted KV-Cache Eviction under Grouped-Query
          Attention
        </a>{" "}
        on arXiv (<span className="font-mono text-xs">arXiv:2610.03135v1</span>).
      </>
    ),
  },
  {
    date: "Jul – Aug 2026",
    content: (
      <>
        I completed the AICTE AWS Gen AI Virtual Internship, designing model training and
        evaluation labs on Amazon SageMaker and AWS Academy.
      </>
    ),
  },
  {
    date: "Apr – Jun 2026",
    content: (
      <>
        I completed the AICTE Google AI/ML Virtual Internship focused on applied machine learning
        labs and systems exercises.
      </>
    ),
  },
  {
    date: "2025 – 2026",
    content: (
      <>
        I won the Raccoon AI Hackathon, reached the Shark Tank national finals, and scored in the
        99.32 national percentile in Naukri Campus Young Turks.
      </>
    ),
  },
]

export function Updates() {
  return (
    <section id="updates" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <SectionHeading eyebrow="Lately" title="Recent" titleItalic="updates." />

        <div className="mt-10 max-w-3xl">
          {UPDATES.map((update, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="grid gap-2 border-t border-border py-6 last:border-b sm:grid-cols-[160px_1fr] sm:gap-6">
                <p className="font-mono text-xs leading-relaxed text-brand">{update.date}</p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {update.content}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
