import type { Metadata } from "next";
import { Inter, Chivo } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chivo = Chivo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-chivo",
});

export const metadata: Metadata = {
  title: "TextiFy - Smart Home Dashboard",
  description: "Modern smart home control dashboard by TextiFy",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${chivo.variable}`}>{children}</body>
    </html>
  );
}
