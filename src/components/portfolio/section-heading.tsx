import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  titleItalic?: string
  intro?: React.ReactNode
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  titleItalic,
  intro,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className="label-caps text-brand">{eyebrow}</p>
      <h2 className="mt-4 font-serif-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
        {title}
        {titleItalic ? (
          <span className="italic text-muted-foreground"> {titleItalic}</span>
        ) : null}
      </h2>
      {intro ? (
        <div className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {intro}
        </div>
      ) : null}
    </Reveal>
  )
}
