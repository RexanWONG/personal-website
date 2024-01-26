import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RESUME_DATA } from "@/data/resume-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
