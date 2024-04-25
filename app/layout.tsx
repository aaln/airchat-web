
import { ThemeProvider } from "@/components/theme-provider";
import { AudioPlayerProvider } from "@/contexts/audio-player";
import { AuthProvider } from '@/contexts/auth';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airchat Web Unofficial",
  description: "Unofficial Airchat Web Client by Aaron Landy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <AudioPlayerProvider>
        <html lang="en">
          <body className={inter.className}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            </ThemeProvider>
          </body>
        </html>
      </AudioPlayerProvider>
      
        
    </AuthProvider>
  );
}
