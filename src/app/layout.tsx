import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amar Gupta - Software Developer Portfolio",
  description: "Software Developer from Melbourne, VIC. Full-stack web development specialist with expertise in JavaScript, React, Next.js, Python, and more. Graduate from Melbourne Institute of Technology.",
  keywords: ["Software Developer", "Full-stack Developer", "JavaScript", "React", "Next.js", "Python", "Melbourne", "Web Development"],
  authors: [{ name: "Amar Gupta" }],
  openGraph: {
    title: "Amar Gupta - Software Developer Portfolio",
    description: "Software Developer from Melbourne, VIC. Full-stack web development specialist with expertise in JavaScript, React, Next.js, Python, and more.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amar Gupta - Software Developer Portfolio",
    description: "Software Developer from Melbourne, VIC. Full-stack web development specialist.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
