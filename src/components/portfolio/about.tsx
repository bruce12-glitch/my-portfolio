"use client"

import { BookOpen } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

const QUICK_FACTS = [
  { label: "Programme", value: "B.Tech CSE (Cyber Security), SRMIST" },
  { label: "CGPA", value: "8.66 / 10" },
  { label: "Graduation", value: "Expected May 2028" },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="About"
          title="A little"
          titleItalic="about me."
        />

        <div className="mt-12 space-y-10 sm:space-y-12">
          <Reveal>
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I&rsquo;m studying{" "}
                <span className="text-foreground">
                  Computer Science and Engineering (Cyber Security)
                </span>{" "}
                at SRM Institute of Science and Technology. I&rsquo;m in my third year, with a
                CGPA of <span className="font-mono text-sm text-foreground">8.66/10</span>, and
                expect to graduate in May 2028.
              </p>
              <p>
                My research centres on LLM inference and memory systems, particularly context
                pruning and KV-cache management under grouped-query attention. I also build AI
                agent workspaces and zero-trust software verification systems.
              </p>
              <p>
                Outside that work, I write. I&rsquo;m the author of{" "}
                <a href="#writing" className="link-underline font-medium text-foreground">
                  Neither Living Nor Dying: Reflection of the Middle
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid gap-4 sm:grid-cols-3">
              {QUICK_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg border border-border bg-card p-5 sm:p-6"
                >
                  <dt className="label-caps text-muted-foreground">{fact.label}</dt>
                  <dd className="mt-2 text-sm font-medium text-foreground sm:text-base">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <p className="label-caps text-brand">Outside research</p>
              <h3 className="mt-3 font-serif-display text-2xl tracking-tight text-foreground sm:text-3xl">
                I&rsquo;ve always loved{" "}
                <span className="italic text-muted-foreground">reading.</span>
              </h3>
              <div className="mt-4 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground">
                <p>I often read about human psychology, psychoanalysis, and finance.</p>
                <p>
                  Lately, I&rsquo;ve been spending more time on mathematics — particularly{" "}
                  <span className="text-foreground">information theory</span> — and thinking about
                  inference for AGI.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Human psychology", "Psychoanalysis", "Finance", "Information theory"].map(
                  (topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      <BookOpen className="h-3 w-3 text-brand" aria-hidden />
                      {topic}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
