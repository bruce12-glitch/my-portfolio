"use client"

import Image from "next/image"
import { BookOpen } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="About"
          title="A little"
          titleItalic="about me."
        />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal delay={0.1} className="mx-auto w-full max-w-xs lg:max-w-none">
            <figure>
              <div className="rounded-lg border border-border bg-card p-3 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.3)]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-secondary">
                  <Image
                    src="/images/portrait-about.png"
                    alt="Portrait of Inbasekaran S"
                    fill
                    sizes="(max-width: 1024px) 80vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                Hand-drawn portrait of Inbasekaran S
              </figcaption>
            </figure>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.15}>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
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

            <Reveal delay={0.2}>
              <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
                <p className="label-caps text-brand">Outside research</p>
                <h3 className="mt-3 font-serif-display text-2xl tracking-tight text-foreground sm:text-3xl">
                  I&rsquo;ve always loved{" "}
                  <span className="italic text-muted-foreground">reading.</span>
                </h3>
                <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                  <p>
                    I often read about human psychology, psychoanalysis, and finance.
                  </p>
                  <p>
                    Lately, I&rsquo;ve been spending more time on mathematics — particularly{" "}
                    <span className="text-foreground">information theory</span> — and thinking
                    about inference for AGI.
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
      </div>
    </section>
  )
}
