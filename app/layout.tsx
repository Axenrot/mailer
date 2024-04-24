import type { Metadata } from "next";
import { Aperture } from "lucide-react";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://theleon.pro"),
  title: {
    default: "Contact Hussein!",
    template: "Get in Touch",
  },
  description: "Email sending project",
  openGraph: {
    title: "Contact Hussein!",
    description: "Get in Touch",
    // url: "https://TheLeon.Pro",
    // siteName: "TheLeon.Pro",
    // images: "/og.png",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex flex-col w-full h-full scrollbar"}>
        {children}
        <Toaster
          toastOptions={{
            // Define default options
            className: "font-absolut-pro font-light text-md tracking-wider",
          }}
        />
      </body>
    </html>
  );
}
