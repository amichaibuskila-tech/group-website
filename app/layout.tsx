import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "Exodus 11480 - קבוצת הרובוטיקה",
  description: "חממה למצוינות טכנולוגית בלוד - קבוצת הרובוטיקה אקסודוס 11480",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
