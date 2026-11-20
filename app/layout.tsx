import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sans = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sagarhedaoo.com"),
  title: "Sagar Hedaoo, AI and data engineer",
  description:
    "Senior full-stack and Databricks engineer building knowledge graphs, RAG systems, lakehouse pipelines and React front ends for finance.",
  openGraph: {
    title: "Sagar Hedaoo",
    description: "AI, data and full-stack engineering for finance.",
    url: "https://sagarhedaoo.com",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1222",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
