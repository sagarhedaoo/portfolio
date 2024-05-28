import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sagar&apos;s Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta property="og:title" content="Sagar Hedaoo - Portfolio" />
        <meta
          property="og:description"
          content="Welcome to My portfolio. Explore my projects, skills, and experiences."
        />
        <meta
          property="og:image"
          content="https://sagarhedaoo.com/sagar-image.jpg"
        />
        <meta property="og:url" content="Sagar Hedaoo Portfolio" />
        <meta property="og:site_name" content="Sagar Hedaoo - Portfolio" />
        <meta
          name="twitter:image:alt"
          content="Sagar Hedaoo's Portfolio Thumbnail"
        />
      </Head>
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-670NTESQHE" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
