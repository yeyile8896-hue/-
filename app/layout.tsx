import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "心火欧青 | HeartFire Journey";
const description =
  "连接欧洲青年，扎根真理，活出使命。心火同行欧洲青年事工连结跨国青年，在营会、线上聚会与门徒陪伴中同行成长。";

export const metadata: Metadata = {
  metadataBase: new URL("https://heartfire-journey.example"),
  title,
  description,
  keywords: [
    "心火欧青",
    "HeartFire Journey",
    "欧洲青年事工",
    "跨国青年营会",
    "基督徒青年平台"
  ],
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg"
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "zh_CN",
    siteName: "心火欧青 | HeartFire Journey",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "心火欧青 HeartFire Journey"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className="min-h-screen bg-[var(--background)] bg-warm-radial font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
