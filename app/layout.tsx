import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n/context";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "~/Daffa",
  description:
    "Portfolio of Hafiz Daffa W. (HDW) — full-stack developer, systems programmer, and tech enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <LanguageProvider>{children}</LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
