"use client"

import * as React from "react"
import { ArrowUpRight, Plus } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"
import { cn } from "@/lib/utils"

type ResearchEntry = {
  index: string
  category: string
  title: string
  href?: string
  subtitle: string
  meta: string[]
  stat?: string
  statHref?: string
  links: { label: string; href: string; external?: boolean }[]
  description: string
  notes: string[]
}

const ENTRIES: ResearchEntry[] = [
  {
    index: "01",
    category: "Context Pruning",
    title: "EntroPrefill",
    href: "https://arxiv.org/abs/2610.09757",
    subtitle:
      "Rényi-Guided Context Pruning with Conditional Stability Guarantees for Retrieval-Augmented Generation",
    meta: ["Inbasekaran S", "arXiv:2610.09757v1 [cs.LG]", "Oct 2026"],
    stat: "−43.1% TTFT",
    links: [
      { label: "Read paper", href: "https://arxiv.org/abs/2610.09757", external: true },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=kNn4OZIAAAAJ&hl=en&authuser=5",
        external: true,
      },
    ],
    description:
      "I study which parts of a long context can be removed while an LLM is still processing the prompt. EntroPrefill uses Rényi entropy to propose what to prune, with checks on the attention mass that is removed.",
    notes: [
      "Rényi-entropy scoring ranks prefill-time tokens by their contribution to attention mass, proposing a pruning schedule before the first token is decoded.",
      "Conditional stability guarantees bound the attention mass removed at every pruning step, so retrieval behaviour stays within a proven tolerance band.",
      "Measured up to a 43.1% reduction in time-to-first-token on retrieval-augmented workloads, without measurable loss in answer quality.",
      "Operates entirely during prefill — no changes to the serving stack or model weights are required.",
    ],
  },
  {
    index: "02",
    category: "KV-Cache Management",
    title: "Page-EntroKV",
    href: "https://arxiv.org/abs/2610.03135",
    subtitle:
      "Hardware-Aligned, Entropy-Weighted KV-Cache Eviction under Grouped-Query Attention",
    meta: ["Inbasekaran S", "arXiv:2610.03135v1", "Oct 2026"],
    stat: "UOR 1.000 · 100% Needle Recall",
    links: [
      { label: "Read paper", href: "https://arxiv.org/abs/2610.03135", external: true },
      { label: "Abstract", href: "https://arxiv.org/abs/2610.03135", external: true },
    ],
    description:
      "I work on how an LLM should use a limited KV cache. Page-EntroKV scores and evicts memory at the page level, matching the layer, group, and page units used by serving systems.",
    notes: [
      "Eviction decisions are made at page granularity, aligned with the layer, KV-group, and page units that paged-attention serving systems actually manage.",
      "Entropy-weighted scoring ranks cached pages by the information they retain for future decoding steps, under grouped-query attention.",
      "Achieves UOR 1.000 and 100% needle recall on long-context retrieval stress tests under aggressive cache budgets.",
      "Designed to drop into existing paged-attention runtimes without retraining the model.",
    ],
  },
  {
    index: "03",
    category: "Software Verification",
    title: "VendorChain",
    subtitle: "Zero-Trust B2B Supply-Chain Verification Engine",
    meta: [
      "Inbasekaran S",
      "Undergraduate Research Opportunities Program (UROP) at SRMIST",
    ],
    links: [],
    description:
      "I built VendorChain to check software as it moves through a supply chain. It combines zero-trust file intake, signed software bills of materials, and a private blockchain record of verification decisions.",
    notes: [
      "Zero-trust file intake — every incoming artifact is treated as untrusted until it passes the verification pipeline.",
      "Signed SBOMs bind each artifact to verifiable provenance before it can enter the B2B exchange.",
      "A private blockchain records every verification decision, producing a tamper-evident audit trail across the supply chain.",
      "Developed as an undergraduate research project under UROP at SRMIST.",
    ],
  },
]

function ExternalLink({
  label,
  href,
  external,
  className,
}: {
  label: string
  href: string
  external?: boolean
  className?: string
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-brand",
        className
      )}
    >
      <span className="link-underline">{label}</span>
      <ArrowUpRight
        className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
        aria-hidden
      />
    </a>
  )
}

function TechnicalNotes({ notes }: { notes: string[] }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger
        className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        aria-expanded={open}
      >
        <span className="label-caps">Technical notes</span>
        <Plus
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            open && "rotate-45 text-brand"
          )}
          aria-hidden
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <ul className="mt-4 space-y-2.5 border-l-2 border-brand/30 pl-4">
          {notes.map((note) => (
            <li key={note} className="text-sm leading-relaxed text-muted-foreground">
              {note}
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

function ResearchEntryItem({ entry, last }: { entry: ResearchEntry; last: boolean }) {
  return (
    <Reveal>
      <article
        className={cn(
          "grid gap-6 py-12 sm:py-14 lg:grid-cols-[auto_1fr] lg:gap-12",
          !last && "border-b border-border"
        )}
      >
        <div className="flex items-start gap-4 lg:w-40 lg:flex-col lg:gap-3">
          <span
            aria-hidden
            className="font-serif-display text-5xl leading-none text-foreground/15 sm:text-6xl"
          >
            {entry.index}
          </span>
          <p className="label-caps pt-1 text-brand lg:pt-0">{entry.category}</p>
        </div>

        <div>
          <h3 className="font-serif-display text-3xl tracking-tight text-foreground sm:text-4xl">
            {entry.href ? (
              <a
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-2 transition-colors hover:text-brand"
              >
                {entry.title}
                <ArrowUpRight
                  className="h-5 w-5 translate-y-0.5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                  aria-hidden
                />
              </a>
            ) : (
              entry.title
            )}
          </h3>
          <p className="mt-2 max-w-2xl font-serif-display text-lg italic leading-snug text-muted-foreground sm:text-xl">
            {entry.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
            {entry.meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>

          {entry.stat ? (
            <div className="mt-5">
              <Badge
                variant="outline"
                className="rounded-full border-brand/40 bg-brand-muted px-3 py-1.5 font-mono text-xs font-medium text-brand"
              >
                {entry.stat}
              </Badge>
            </div>
          ) : entry.category === "Software Verification" ? (
            <div className="mt-5">
              <Badge
                variant="outline"
                className="rounded-full border-border bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-muted-foreground"
              >
                Zero-Trust &amp; Cryptography
              </Badge>
            </div>
          ) : null}

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {entry.description}
          </p>

          {entry.links.length > 0 ? (
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              {entry.links.map((link) => (
                <ExternalLink key={link.label} {...link} />
              ))}
            </div>
          ) : null}

          <div className="mt-6">
            <TechnicalNotes notes={entry.notes} />
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Research() {
  return (
    <section id="research" className="scroll-mt-20 border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="Research"
          title="My"
          titleItalic="research."
          intro={
            <p>
              I&rsquo;m interested in how language models use time and memory. My work focuses on{" "}
              <span className="text-foreground">context pruning</span>,{" "}
              <span className="text-foreground">KV-cache management</span>, and the{" "}
              <span className="text-foreground">information theory</span> behind those choices. I
              also work on zero-trust software verification.
            </p>
          }
        />

        <div className="mt-6">
          {ENTRIES.map((entry, i) => (
            <ResearchEntryItem
              key={entry.title}
              entry={entry}
              last={i === ENTRIES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
