import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";

// Optimasi font loading dengan display swap untuk performa
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", // Font akan ditampilkan dengan fallback terlebih dahulu
  preload: true, // Preload font untuk performa lebih baik
  variable: "--font-inter", // CSS variable untuk fleksibilitas
});

export const metadata: Metadata = {
  title: "Zenix - Trading Platform",
  description: "Institutional Grade Forex Trading Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect ke Google Fonts untuk optimasi loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols - load dengan display=optional untuk optimasi */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
