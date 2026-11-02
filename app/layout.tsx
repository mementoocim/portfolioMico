import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "wdth"],
});

const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#111113" },
  ],
};

export const metadata: Metadata = {
  title: "Mico Balmaceda | IT Graduate, Systems & User Support",
  description:
    "Portfolio of Mico Balmaceda, a BS Information Technology graduate (2026) experienced in systems and user support, customer service, troubleshooting, workflow documentation, testing, and data validation.",
  keywords: [
    "Mico Balmaceda",
    "Information Technology Graduate",
    "Systems and User Support",
    "Customer Experience Associate",
    "Technical Support",
    "Troubleshooting",
    "Data Validation",
    "Workflow Documentation",
    "Software Testing",
    "PHP",
    "MySQL",
    "Web Development",
    "Agentic Coding",
    "AI-Assisted Development",
    "Claude",
    "ChatGPT",
    "Cursor AI",
    "Isabela State University",
  ],
  authors: [{ name: "Mico Balmaceda" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
