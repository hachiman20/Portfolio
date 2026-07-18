import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { metadataContent } from "@/data/metadata";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = { title: metadataContent.title, description: metadataContent.description, keywords: metadataContent.keywords, openGraph: { title: metadataContent.openGraph.title, description: metadataContent.openGraph.description, type: "website" }, twitter: { card: "summary_large_image", title: metadataContent.twitter.title, description: metadataContent.twitter.description } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="flex min-h-full flex-col">{children}</body></html>; }
