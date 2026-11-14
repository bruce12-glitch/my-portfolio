"use client"

import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"
import { cn } from "@/lib/utils"

export type TimelineItem = {
  period: string
  title: string
  subtitle?: string
  description: string
  tags?: string[]
}

type TimelineProps = {
  eyebrow: string
  title: string
  titleItalic?: string
  items: TimelineItem[]
  id?: string
  className?: string
}

export function Timeline({
  eyebrow,
  title,
  titleItalic,
  items,
  id,
  className,
}: TimelineProps) {
  return (
    <section id={id} className={cn("scroll-mt-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <SectionHeading eyebrow={eyebrow} title={title} titleItalic={titleItalic} />

        <ol className="mt-12 space-y-0">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <li
                className={cn(
                  "relative grid gap-3 border-l border-border py-8 pl-8 sm:gap-5 sm:pl-12 md:grid-cols-[220px_1fr]",
                  i !== items.length - 1 && "pb-8"
                )}
              >
                {/* Node */}
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-10 h-2.5 w-2.5 rounded-full border-2 border-brand bg-background"
                />
                <div className="pt-1">
                  <p className="font-mono text-xs tracking-wide text-brand">{item.period}</p>
                </div>
                <div>
                  <h3 className="font-serif-display text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  {item.subtitle ? (
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {item.subtitle}
                    </p>
                  ) : null}
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                  {item.tags ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
