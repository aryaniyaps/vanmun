import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
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
      <body
        className={cn("bg-pattern font-sans antialiased", workSans.variable)}
      >
        <Navbar />
        <div className="flex-1 max-w-full lg:max-w-7xl mx-auto">{children}</div>
        <Footer />
        {/* toaster goes here */}
        <Toaster />
      </body>
    </html>
  );
}
