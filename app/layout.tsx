import type { Metadata, Viewport } from "next";
import { Archivo, Courier_Prime, Kristi, Reenie_Beanie } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

// Printed matter: form title, labels, section bars.
const print = Archivo({
  subsets: ["latin"],
  variable: "--font-print",
  display: "swap",
  axes: ["wdth"],
});

// Typewritten answers.
const typed = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-typed",
  display: "swap",
});

// Ballpoint handwriting: letters in boxes, big answers, numbers.
const hand = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
});

const signature = Kristi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#dfc08c" },
    { media: "(prefers-color-scheme: dark)", color: "#071327" },
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
      className={`${print.variable} ${typed.variable} ${hand.variable} ${signature.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
