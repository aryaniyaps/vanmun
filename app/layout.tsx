import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "VANMUN 2023",
  description: "Official website for VANMUN 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={cn("font-sans antialiased", inter.variable)}>
        <Navbar />
        <div className="flex-1 max-w-7xl mx-auto">{children}</div>
        <Footer />
        {/* toaster goes here */}
        <Toaster />
      </body>
    </html>
  );
}
