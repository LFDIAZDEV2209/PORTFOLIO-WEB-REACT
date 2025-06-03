import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Meteors } from "@/components/ui/meteors";
import { LanguageProvider } from "@/context/LanguageContext";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luis Felipe Diaz",
  description: "Portfolio by LFDIAZDEV2209",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.className} antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <Meteors />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
