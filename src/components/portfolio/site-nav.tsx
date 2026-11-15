"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Recognition", href: "#recognition" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full text-muted-foreground hover:text-foreground"
    >
      {/* CSS-driven swap keeps server and client markup identical */}
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden />
      <Moon className="h-4 w-4 dark:hidden" aria-hidden />
    </Button>
  )
}

export function SiteNav() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Inbasekaran S. — back to top"
        >
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/25 font-serif-display text-sm italic text-foreground transition-colors group-hover:border-brand group-hover:text-brand"
          >
            IS
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-foreground sm:block">
            Inbasekaran S.
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 md:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>

          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background md:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base text-foreground transition-colors hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
