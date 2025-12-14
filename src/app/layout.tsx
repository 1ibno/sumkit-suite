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
  title: "SumKit - AI Text Summarization Tools",
  description: "Five focused AI-powered text tools for summarization, extraction, and compression. Free, no signup required.",
  url: "https://sumkit.app",
  siteName: "SumKit",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "SumKit - Five tools, one simple suite"
    }
  ],
  type: "website"
},
twitter: {
  card: "summary_large_image",
  title: "SumKit - AI Text Summarization Tools",
  description: "Five focused AI-powered text tools for summarization, extraction, and compression. Free, no signup required.",
  images: ["/og-image.png"]
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
      <body className={`${inter.variable} ${crimsonPro.variable} antialiased min-h-screen`}>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "SumKit",
        "url": "https://sumkit.app",
        "description": "Five focused AI-powered text tools for summarization, extraction, and compression. Free, no signup required.",
        "applicationCategory": "ProductivityApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }).replace(/</g, '\\u003c')
    }}
  />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is SumKit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SumKit is a free suite of five AI-powered text summarization tools: TenWordSum, SentenceSum, PointSum, InstructionSum, and TightSum."
          }
        },
        {
          "@type": "Question",
          "name": "Are all SumKit tools free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all five tools in the SumKit suite are completely free with no signup or subscription required."
          }
        },
        {
          "@type": "Question",
          "name": "Which SumKit tool should I use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use TenWordSum for ultra-short summaries, SentenceSum for one-sentence overviews, PointSum for bullet-point insights, InstructionSum for step-by-step instructions, or TightSum for 15-25 word compression."
          }
        },
        {
          "@type": "Question",
          "name": "What makes SumKit different from other summarization tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SumKit offers five specialized tools for different summarization needs, all free, with no signup, and guaranteed privacy."
          }
        },
        {
          "@type": "Question",
          "name": "What AI technology powers SumKit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All SumKit tools are powered by Claude AI from Anthropic, ensuring high-quality, accurate summaries."
          }
        },
        {
          "@type": "Question",
          "name": "Is my data private when using SumKit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All SumKit tools process text via Claude AI and never store your input. Your data remains completely private across all tools."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to create an account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No account needed for any SumKit tool. Simply visit any tool and start using it immediately."
          }
        }
      ]
    }).replace(/</g, '\\u003c')
  }}
/>
  {children}
  <Analytics />
</body>
    </html>
  );
}
