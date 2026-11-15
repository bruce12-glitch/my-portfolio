import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Inbasekaran S.",
  jobTitle: "Undergraduate Researcher — LLM Inference & Memory Systems",
  alumniOf: "SRM Institute of Science and Technology",
  knowsAbout: [
    "LLM inference",
    "KV-cache management",
    "Context pruning",
    "Information theory",
    "Zero-trust software verification",
  ],
  sameAs: [
    "https://scholar.google.com/citations?user=kNn4OZIAAAAJ",
    "https://github.com/bruce12-glitch",
    "https://www.linkedin.com/in/inbasekaran-s-106a90383",
    "https://bruce12-glitch.github.io/Neuroplastic/",
  ],
};

export const metadata: Metadata = {
  title: "Inbasekaran S. — Researcher · Reader · Author",
  description:
    "Portfolio of Inbasekaran S. — third-year undergraduate at SRMIST working on LLM inference and memory systems. Founder of ILRL Labs and Intellect, author of Neither Living Nor Dying.",
  keywords: [
    "Inbasekaran",
    "LLM inference",
    "KV-cache",
    "context pruning",
    "information theory",
    "ILRL Labs",
    "research",
  ],
  authors: [{ name: "Inbasekaran S." }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Inbasekaran S. — Researcher · Reader · Author",
    description:
      "LLM inference and memory systems. Context pruning, KV-cache management, and the information theory behind those choices.",
    siteName: "Inbasekaran S.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inbasekaran S. — Researcher · Reader · Author",
    description:
      "LLM inference and memory systems. Context pruning, KV-cache management, and the information theory behind those choices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
