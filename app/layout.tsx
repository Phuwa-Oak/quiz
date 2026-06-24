import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HQ Management System",
  description: "White cream minimal HQ management web structure built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
