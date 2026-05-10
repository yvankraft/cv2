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
  title: "Yvan Wildis Ngone Tchinda",
  description: "this is my cv",
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
      <meta
        name="google-site-verification"
        content="5C0azqD_vgEcB1y2s45UTbFiDpLQ2upyyGrOrTIXEOw"
      />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
