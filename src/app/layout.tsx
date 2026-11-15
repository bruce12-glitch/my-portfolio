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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
