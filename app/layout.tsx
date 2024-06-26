import { ThemeProvider } from '@/components/theme-provider';
import { AudioPlayerProvider } from '@/contexts/audio-player';
import { AuthProvider } from '@/contexts/auth';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CSPostHogProvider } from './providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airchat Web Unofficial',
  description:
    'Unofficial Airchat Web Client by Aaron Landy, designed to integrate with the unofficial internal Airchat API.',
  openGraph: {
    images: [
      '/screenshots/top.png',
      '/screenshots/search.png',
      '/screenshots/stream.png'
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <AudioPlayerProvider>
        <html lang='en'>
          <head>
            <link rel='icon' href='/favicon.png' type='image/png' sizes='any' />

            <meta
              property='og:image'
              content='https://airchat-web.vercel.app/screenshots/search.png'
            />
          </head>
          <CSPostHogProvider>
            <body className={inter.className}>
              <ThemeProvider
                attribute='class'
                defaultTheme='light'
                enableSystem
              >
                {children}
                <Analytics />
              </ThemeProvider>
            </body>
          </CSPostHogProvider>
        </html>
      </AudioPlayerProvider>
    </AuthProvider>
  );
}
