import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/navbar/navbar";
import styles from "./global.module.scss";
import Footer from "./components/footer/footer";
import Head from "next/head";
import Loading from "./loading";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Namah ai",
  description: "Welcome to AI library for all of your uses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={styles.container}>
        <NavBar />
        <SpeedInsights/>
        <meta name="google-adsense-account" content="ca-pub-4742312301717342"></meta>
        <Suspense fallback={<Loading />} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
