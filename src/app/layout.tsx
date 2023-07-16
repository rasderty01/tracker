import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@uploadthing/react/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracker",
  description: "Developed by John",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="flex min-h-screen flex-col items-center justify-between">
            <NavBar />
            {children}
            <Footer />
            <Toaster />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
