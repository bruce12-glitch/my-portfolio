"use client"

import * as React from "react"
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Reveal } from "./reveal"

const EMAIL = "inba.research.ilrl.labs@gmail.com"

export function Contact() {
  const [copied, setCopied] = React.useState(false)
  const { toast } = useToast()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      toast({
        title: "Email address copied",
        description: EMAIL,
      })
      window.setTimeout(() => setCopied(false), 2400)
    } catch {
      // Clipboard unavailable — offer the mailto link as the fallback path.
      toast({
        title: "Copy not available",
        description: `Please copy the address manually: ${EMAIL}`,
      })
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-primary text-primary-foreground"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(50rem 24rem at 70% 120%, currentColor 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label-caps text-primary-foreground/70">Get in touch</p>
          <h2 className="mt-4 font-serif-display text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Let&rsquo;s <span className="italic text-primary-foreground/70">talk.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            If you&rsquo;d like to talk about my research, work on something together, or recommend
            a book, I&rsquo;d love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto mt-12 max-w-2xl">
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm sm:flex-row sm:gap-6 sm:p-8">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex min-w-0 items-center gap-3 text-center sm:text-left"
              aria-label={`Send an email to ${EMAIL}`}
            >
              <span
                aria-hidden
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors group-hover:bg-primary-foreground/20"
              >
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="label-caps block text-primary-foreground/60">
                  Send me an email
                </span>
                <span className="mt-1 block break-all font-mono text-sm sm:text-base">
                  {EMAIL}
                </span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-primary-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
            <Button
              variant="outline"
              onClick={copyEmail}
              className="shrink-0 rounded-full border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="mr-1.5 h-4 w-4" aria-hidden />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="mr-1.5 h-4 w-4" aria-hidden />
                  Copy email address
                </>
              )}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
