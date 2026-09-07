import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ec" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1d1a" },
  ],
};

export const metadata: Metadata = {
  title: "Mico Balmaceda — Systems & Full-Stack Developer",
  description:
    "Personal portfolio of Mico Balmaceda — fresh BSICT graduate with experience in campus production systems, relational databases, and full-stack web development.",
  keywords: [
    "Mico Balmaceda",
    "Developer",
    "Full-Stack",
    "Portfolio",
    "MySQL",
    "PHP",
    "React",
    "Next.js",
    "Isabela State University",
  ],
  authors: [{ name: "Mico Balmaceda" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
