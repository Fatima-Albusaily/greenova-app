import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_Components/Layout/Footer";
import Navbar from "./_Components/Layout/Navbar";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greenova.bio"),
  openGraph: {
    title: "GreeNova",
    description: "صحة الإنسان تبدأ من صحة الأرض",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir='rtl'
      className={`${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <title>GreenOva</title>
      </head>
      <body className="h-fit scroll-m-0.5 overflow-x-hidden bg-mainbg">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Toaster
          position="top-right"
          richColors
          closeButton
        />
      </body>
    </html>
  );
}
