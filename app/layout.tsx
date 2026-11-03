import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://diamondcoatss.com"),

  title: {
    default: "Epoxy Flooring Austin TX | Diamond Coat Epoxy Solutions",
    template: "%s | Diamond Coat Epoxy Solutions",
  },

  description:
    "Professional epoxy flooring, garage floor coatings, metallic epoxy finishes, and custom epoxy builds in Austin, Texas.",

  openGraph: {
    title: "Diamond Coat Epoxy Solutions | Professional Epoxy Flooring",
    description:
      "Transform your space with professional epoxy flooring and custom epoxy builds. Serving Austin and surrounding Central Texas communities.",
    url: "https://diamondcoatss.com",
    siteName: "Diamond Coat Epoxy Solutions",
    images: [
      {
        url: "/icon.jpeg",
        width: 1200,
        height: 630,
        alt: "Diamond Coat Epoxy Solutions professional epoxy flooring",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diamond Coat Epoxy Solutions | Professional Epoxy Flooring",
    description:
      "Professional epoxy flooring and custom epoxy builds serving Austin, TX and surrounding communities.",
    images: ["/icon.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="min-h-screen">
            {children}
        </main>

        <Footer />

        </body>
    </html>
  );
}
