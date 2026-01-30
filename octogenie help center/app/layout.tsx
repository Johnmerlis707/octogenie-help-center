import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OctoGenie Help Center",
  description: "Everything you need to manage your legal practice in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MobileMenu />
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 md:ml-64">
            <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 md:px-8 py-4">
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                <SearchBar />
                <Link
                  href="https://partner.octogenie.com"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors text-center"
                >
                  Open App
                </Link>
              </div>
            </header>
            <main className="px-4 md:px-8 py-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
