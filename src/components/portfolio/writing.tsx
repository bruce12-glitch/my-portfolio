"use client"

import Image from "next/image"
import { ArrowUpRight, PenLine } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "./reveal"

export function Writing() {
  return (
    <section id="writing" className="scroll-mt-20 border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Book cover */}
          <Reveal className="mx-auto w-full max-w-[260px] lg:max-w-sm">
            <figure>
              <div className="rounded-lg border border-border bg-card p-3 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:-rotate-1">
                <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-secondary">
                  <Image
                    src="/images/book-neither-living-nor-dying.png"
                    alt="Book cover for Neither Living Nor Dying: Reflections on the Middle by Inbasekaran S"
                    fill
                    sizes="(max-width: 1024px) 60vw, 28vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
                Book cover for Neither Living Nor Dying: Reflections on the Middle by Inbasekaran S
              </figcaption>
            </figure>
          </Reveal>

          {/* Book info */}
          <div>
            <Reveal>
              <p className="label-caps text-brand">Beyond research</p>
              <h2 className="mt-4 font-serif-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                Writing<span className="italic text-muted-foreground">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-lg border border-border bg-background p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-foreground">
                    Published Book
                  </Badge>
                  <span className="font-mono text-xs text-muted-foreground">Authored Book</span>
                </div>
                <h3 className="mt-4 font-serif-display text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
                  Neither Living Nor Dying:{" "}
                  <span className="italic text-muted-foreground">Reflection of the Middle</span>
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">Inbasekaran S</p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                  I also write about philosophy. My book,{" "}
                  <span className="text-foreground">
                    Neither Living Nor Dying: Reflection of the Middle
                  </span>
                  , is available on Amazon.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a
                    href="https://www.amazon.com/dp/B0HG7J6NSS/ref=tmm_pap_swatch_0?_encoding=UTF8&sr=8-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
                  >
                    Find it on Amazon
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </a>
                  <a
                    href="https://bruce12-glitch.github.io/Neuroplastic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
                  >
                    <PenLine className="h-4 w-4 text-brand" aria-hidden />
                    <span className="link-underline">Read my blog, Neuroplastic</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
