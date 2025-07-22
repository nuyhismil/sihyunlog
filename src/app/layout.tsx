// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Header import
import Footer from "@/components/Footer"; // Footer import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sihyun-Lim",
  description: "A blog created with Next.js and contentlayer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow px-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
