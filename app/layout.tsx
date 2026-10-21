import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yvan Wildis Ngone Tchinda — Full-stack Developer",
  description:
    "Full-stack developer and electrical engineering student based in Hamm, Germany. Building high-end digital experiences with React, Next.js and Flutter.",
  keywords: [
    "Yvan Wildis",
    "Ngone Tchinda",
    "Full-stack developer",
    "Next.js",
    "Flutter",
    "Hamm",
  ],
  openGraph: {
    title: "Yvan Wildis Ngone Tchinda — Full-stack Developer",
    description:
      "Full-stack developer and electrical engineering student based in Hamm, Germany.",
    type: "website",
  },
  verification: {
    google: "5C0azqD_vgEcB1y2s45UTbFiDpLQ2upyyGrOrTIXEOw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
