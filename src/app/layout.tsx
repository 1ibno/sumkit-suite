import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimsonPro = Crimson_Pro({ 
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "SumKit – Free AI Text Tools",
  description: "Five focused AI-powered text tools. Summarize, extract, compress — no sign-ups, no friction.",
  keywords: ["AI", "text tools", "summarize", "summarizer", "free tools", "SumKit"],
  authors: [{ name: "SumKit" }],
  openGraph: {
    title: "SumKit – Free AI Text Tools",
    description: "Five focused AI-powered text tools. Summarize, extract, compress — no sign-ups, no friction.",
    url: "https://sumkit.app",
    siteName: "SumKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SumKit – Free AI Text Tools",
    description: "Five focused AI-powered text tools. Summarize, extract, compress — no sign-ups, no friction.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${crimsonPro.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}