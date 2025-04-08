import "@/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Porfolio",
  authors: [{ name: "LizzyEll" }],
  keywords: ["Portfolio", "LizzyEll", "LizzyEll00", "Projects", "Lunarware", "Lunarware.xyz", "Lunarware.tech"],
  description: "Portfolio of LizzyEll",
  openGraph: {
    title: "Portfolio",
    description: "Portfolio of LizzyEll",
    url: "https://lunarware.tech",
    siteName: "Portfolio",
    images: [
      {
        url: "https://lunarware.xyz/images/avatar.webp",
        width: 800,
        height: 600,
        alt: "Avatar of LizzyEll",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/images/avatar.webp" }],
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins-sans",
  weight: ["400"]
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <main className="flex h-screen flex-col items-center justify-between p-16">
          <h1 className="text-4xl font-bold text-center">LizzyEll</h1>
          <Suspense fallback={<p className="text-black">Loading...</p>}>
            {children}
          </Suspense>
          <h2 className="text-2xl font-bold text-center">Portfolio</h2>
        </main>
      </body>
    </html>
  );
}
