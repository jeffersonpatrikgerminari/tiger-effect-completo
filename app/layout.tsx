import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import LangProvider from "@/components/LangProvider";
import BuyModalProvider from "@/components/BuyModalProvider";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Efeito Tigre | Tiger Effect",
  description:
    "Trilogia sobre vício em apostas digitais e algoritmos predatórios. The game doesn't want you to win — it wants you to stay."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} noise`}>
        <LangProvider>
          <BuyModalProvider>
            <Navbar />
            <main className="relative z-10 pb-20 md:pb-0">{children}</main>
            <Footer />
            <StickyCta />
          </BuyModalProvider>
        </LangProvider>
      </body>
    </html>
  );
}

