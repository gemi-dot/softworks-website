import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer, NavigationBar } from "@/components/layout";

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
  metadataBase: new URL("https://softworks.studio"),
  title: {
    default: "SoftWorks | Local Community Solutions",
    template: "%s | SoftWorks",
  },
  description:
    "SoftWorks helps local teams launch first-stage community services and modern business systems.",
  openGraph: {
    title: "SoftWorks",
    description:
      "Digital product strategy, engineering, and analytics systems for modern teams.",
    url: "https://softworks.studio",
    siteName: "SoftWorks",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftWorks",
    description:
      "Digital product strategy, engineering, and analytics systems for modern teams.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="site-background min-h-full flex flex-col">
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
