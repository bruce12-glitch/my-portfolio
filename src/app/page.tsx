import { SiteNav } from "@/components/portfolio/site-nav"
import { Hero } from "@/components/portfolio/hero"
import { Research } from "@/components/portfolio/research"
import { About } from "@/components/portfolio/about"
import { Recognition } from "@/components/portfolio/recognition"
import { Timeline } from "@/components/portfolio/timeline"
import { Writing } from "@/components/portfolio/writing"
import { Updates } from "@/components/portfolio/updates"
import { Contact } from "@/components/portfolio/contact"
import { SiteFooter } from "@/components/portfolio/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Research />
        <About />
        <Recognition />

        <Timeline
          id="experience"
          eyebrow="Experience & education"
          title="Where I've"
          titleItalic="learned."
          items={[
            {
              period: "Jul – Aug 2026",
              title: "AICTE AWS Gen AI Intern — Virtual",
              description:
                "I worked through generative AI labs and planned model training and evaluation exercises using Amazon SageMaker and AWS Academy, documenting accuracy and performance metrics.",
              tags: ["Amazon SageMaker", "AWS Academy", "Generative AI"],
            },
            {
              period: "Apr – Jun 2026",
              title: "AICTE Google Virtual Intern — AI/ML Virtual",
              description:
                "I completed hands-on machine learning exercises, practical workflows, and applied AI/ML projects.",
              tags: ["Machine Learning", "Applied AI"],
            },
            {
              period: "2024 – 2028",
              title: "SRM Institute of Science and Technology (SRMIST)",
              subtitle:
                "B.Tech in Computer Science & Engineering (Cyber Security) · CGPA: 8.66 / 10 · Expected May 2028",
              description:
                "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, Artificial Intelligence, Information Security, System Design.",
              tags: ["B.Tech", "Cyber Security", "CGPA 8.66/10"],
            },
          ]}
        />

        <Timeline
          id="teamwork"
          eyebrow="People & teamwork"
          title="Working"
          titleItalic="together."
          className="border-t border-border bg-card/40"
          items={[
            {
              period: "Aug 2025 – Aug 2026",
              title: "Creatives & Sponsorship Lead",
              subtitle: "Founders Club SRMIST",
              description:
                "I led technical, creative, and outreach work for 5+ university startup events. Improving how the teams communicated helped reduce deliverable turnaround time by 25%.",
              tags: ["Leadership", "Outreach"],
            },
            {
              period: "Aug 2025 – Aug 2026",
              title: "Technical Member",
              subtitle: "E-Cell SRMIST",
              description:
                "I built websites and promotional materials for campus entrepreneurship events.",
              tags: ["Web", "Design"],
            },
            {
              period: "Aug 2024 – Present",
              title: "Corporate Member",
              subtitle: "IEEE Student Branch SRMIST",
              description:
                "I worked on corporate outreach and sponsorships to bring industry partners into technical events.",
              tags: ["Sponsorships", "Industry"],
            },
          ]}
        />

        <Writing />
        <Updates />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
