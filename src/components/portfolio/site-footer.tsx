import { ArrowUpRight } from "lucide-react"

const FOOTER_LINKS = [
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Recognition", href: "#recognition" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 pb-[calc(2rem+env(safe-area-inset-bottom))] sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif-display text-lg italic tracking-tight text-foreground">
            Inbasekaran S.
          </p>
          <p className="label-caps mt-1 text-muted-foreground">
            Researcher · Reader · Author
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/bruce12-glitch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
            <ArrowUpRight className="h-3 w-3" aria-hidden />
          </a>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Inbasekaran S. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
