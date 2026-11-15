"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, BookOpen, Github, GraduationCap, Linkedin, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { withBase } from "@/lib/site-assets"
import { cn } from "@/lib/utils"

const EXTERNAL_LINKS = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=kNn4OZIAAAAJ&hl=en&authuser=5",
    icon: GraduationCap,
  },
  {
    label: "GitHub",
    href: "https://github.com/bruce12-glitch",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/inbasekaran-s-106a90383",
    icon: Linkedin,
  },
  {
    label: "Blog",
    href: "https://bruce12-glitch.github.io/Neuroplastic/",
    icon: BookOpen,
  },
]

const WORKING_ON = ["LLM inference", "KV-cache systems", "Information theory"]

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Soft paper glow */}
      <div aria-hidden className="paper-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:pb-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left — intro */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="label-caps text-brand"
            >
              Researcher · Reader · Author
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="mt-5 font-serif-display text-5xl leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Inbasekaran S.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
              className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              <p>
                I&rsquo;m a third-year undergraduate at SRMIST, working on{" "}
                <span className="text-foreground">LLM inference and memory systems</span>.
              </p>
              <p>
                Founder of{" "}
                <a
                  href="#research"
                  className="link-underline text-foreground"
                  title="ILRL Labs — Inference in Loops and Recurrence Learning"
                >
                  ILRL Labs
                </a>{" "}
                — <span className="italic">(Inference in Loops and Recurrence Learning)</span> — and{" "}
                <a href="#about" className="link-underline text-foreground">
                  Intellect
                </a>
                , a non-profit organisation for book readers and researchers.
              </p>
              <p>
                My research interests are LLM inference and ML systems, agentic memory, and
                inference in AGI and development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" className="rounded-full">
                <a href="#research">
                  Read my research
                  <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/25">
                <a href="#contact">
                  Get in touch
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                </a>
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
              aria-label="External profiles"
            >
              {EXTERNAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("#") ? undefined : "_blank"}
                    rel={link.href.startsWith("#") ? undefined : "noopener noreferrer"}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <link.icon className="h-4 w-4 text-brand" aria-hidden />
                    <span className="link-underline">{link.label}</span>
                    {!link.href.startsWith("#") && (
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        aria-hidden
                      />
                    )}
                  </a>
                </li>
              ))}
            </motion.ul>

            {/* Working on */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="mt-12 border-t border-border pt-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-brand" aria-hidden />
                    Based in India
                  </p>
                  <p className="text-sm text-muted-foreground">AI systems &amp; LLM inference</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="label-caps mr-1 text-muted-foreground">What I&rsquo;m working on</span>
                {WORKING_ON.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
                <a
                  href="#research"
                  className="rounded-full border border-brand/40 bg-brand-muted px-3 py-1 text-xs font-medium text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
                >
                  Founder, ILRL Labs
                  <ArrowUpRight className="ml-1 inline h-3 w-3" aria-hidden />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.figure
            initial={{ opacity: 0, y: 32, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="rounded-lg border border-border bg-card p-3 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:rotate-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-secondary">
                <img
                  src={withBase("/images/portrait-real.jpg")}
                  alt="Portrait of Inbasekaran S"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
            <figcaption
              className={cn(
                "mt-3 text-center text-xs text-muted-foreground"
              )}
            >
              Portrait of Inbasekaran S
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
