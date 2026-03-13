import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lorenzograssi.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lorenzo Grassi | Software Developer",
    template: "%s | Lorenzo Grassi",
  },
  description:
    "Official portfolio of Lorenzo Grassi, software developer focused on clean, scalable, and meaningful digital products.",
  keywords: [
    "Lorenzo Grassi",
    "Lorenzo Grassi portfolio",
    "software developer",
    "full-stack developer",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Lorenzo Grassi" }],
  creator: "Lorenzo Grassi",
  publisher: "Lorenzo Grassi",
  openGraph: {
    title: "Lorenzo Grassi | Software Developer",
    description:
      "Official portfolio of Lorenzo Grassi, software developer focused on clean, scalable, and meaningful digital products.",
    url: "/",
    siteName: "Lorenzo Grassi Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorenzo Grassi | Software Developer",
    description:
      "Official portfolio of Lorenzo Grassi, software developer focused on clean, scalable, and meaningful digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
