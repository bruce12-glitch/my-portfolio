"use client"

import { Award, Cloud, Percent, Target, Timer, Trophy } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

const HIGHLIGHTS = [
  {
    icon: Trophy,
    kicker: "Hackathon Winner",
    title: "Raccoon AI Hackathon",
    description:
      "I won first place after building and demonstrating an applied AI system.",
  },
  {
    icon: Target,
    kicker: "National Finalist",
    title: "Shark Tank Nationals",
    description:
      "I was selected as a national finalist and presented an AI product prototype to an investor panel.",
  },
  {
    icon: Timer,
    kicker: "Top 10 Finalist",
    title: "Hack Rush Hackathon",
    description:
      "I placed in the Top 10 after building a working software MVP in a 24-hour sprint.",
  },
  {
    icon: Percent,
    kicker: "Top 0.68% India",
    title: "Naukri Campus Young Turks",
    description:
      "I scored in the 99.32 national percentile in Naukri Campus Young Turks' coding and technology assessments across India.",
  },
]

const CERTS = [
  {
    year: "2026",
    title: "Oracle Cloud & AI 4x Foundations Associate",
    description:
      "I earned four Oracle Cloud & AI Foundations Associate certifications in 2026.",
  },
  {
    year: "2025",
    title: "Prompt Engineering · NPTEL Silver Rank · Lean Six Sigma",
    description:
      "In 2025, I completed Prompt Engineering for Generative AI through DeepLearning.AI / Coursera, earned an NPTEL Silver Rank in Fundamentals of C/C++/Java/DBMS, and earned the IASSC Lean Six Sigma Green Belt.",
  },
]

export function Recognition() {
  return (
    <section
      id="recognition"
      className="scroll-mt-20 border-t border-border bg-card/40"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <SectionHeading eyebrow="Recognition" title="Awards &" titleItalic="recognition." />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="group flex h-full flex-col rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.35)]">
                <item.icon
                  className="h-5 w-5 text-brand transition-transform duration-300 group-hover:scale-110"
                  aria-hidden
                />
                <p className="label-caps mt-5 text-muted-foreground">{item.kicker}</p>
                <h3 className="mt-2 font-serif-display text-xl leading-snug tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {CERTS.map((cert, i) => (
            <Reveal key={cert.year} delay={i * 0.08}>
              <article className="flex h-full gap-5 rounded-lg border border-border bg-background p-6 transition-colors hover:border-brand/40 sm:p-8">
                <div
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand-muted"
                >
                  {i === 0 ? (
                    <Cloud className="h-5 w-5 text-brand" aria-hidden />
                  ) : (
                    <Award className="h-5 w-5 text-brand" aria-hidden />
                  )}
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{cert.year}</p>
                  <h3 className="mt-1.5 font-serif-display text-xl leading-snug tracking-tight text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
