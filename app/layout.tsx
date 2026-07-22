import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Footer from "./_Components/Layout/Footer";
import Navbar from "./_Components/Layout/Navbar";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";


const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
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
      className={`${tajawal.variable} antialiased`}
    >
      <head>
        <title>GreenNova</title>
      </head>
      <body className={`${tajawal.className} h-fit scroll-m-0.5 overflow-x-hidden bg-mainbg`}>
      <LanguageProvider>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Toaster
          position="top-right"
          richColors
          closeButton
        />
        </LanguageProvider>
      </body>
    </html>
  );
}
