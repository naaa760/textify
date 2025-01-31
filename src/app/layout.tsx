import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lattice - The HR platform people love",
  description:
    "Manage employee information, drive performance, capture team sentiment, and report key insights - all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body className="antialiased">
        <div className="min-h-screen bg-white">{children}</div>
      </body>
    </html>
  );
}
