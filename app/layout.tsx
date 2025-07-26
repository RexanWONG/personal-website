import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { RESUME_DATA } from "@/data/resume-data";

const inter = Inter({ subsets: ["latin"] });

export const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `rexan wong`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rexanwong.ico" type="image/x-icon" />
        <meta name="google-adsense-account" content="ca-pub-1609710199882100"></meta>
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
