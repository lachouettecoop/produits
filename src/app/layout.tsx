import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">

        <Link href="/">home</Link>
        <Link href="/login">login</Link>
        <Link href="/commandes">commandes</Link>
        </div>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

          {children}
        </main>
      </body>
    </html>
  );
}
