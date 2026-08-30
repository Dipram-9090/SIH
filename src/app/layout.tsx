import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Bitcoin Investigation System | SIH 2026 Educational Platform",
  description:
    "An educational walkthrough explaining how an AI-powered cyber investigation platform detects suspicious Bitcoin transactions, clusters criminal entities, and assists investigators through explainable AI.",
  keywords: [
    "Bitcoin Investigation",
    "Smart India Hackathon",
    "SIH 2026",
    "Cybercrime Investigation",
    "Blockchain Forensics",
    "Explainable AI",
    "Graph Analytics",
    "AML",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceMono.variable} scroll-smooth`}>
      <body className="font-mono bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
