import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Siddharth Seth | Portfolio',
  description:
    'Portfolio of Siddharth Seth — Computer Science student and Full-Stack Developer.',
  keywords: [
    'Siddharth Seth',
    'Portfolio',
    'Developer',
    'Full Stack',
    'MERN',
    'Web Development',
    'Next.js',
    'React',
  ],
  authors: [
    {
      name: 'Siddharth Seth',
    },
  ],
  creator: 'Siddharth Seth',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Siddharth Seth | Portfolio',
    description:
      'Portfolio of Siddharth Seth — Computer Science student and Full-Stack Developer.',
    siteName: 'Siddharth Seth Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddharth Seth | Portfolio',
    description:
      'Portfolio of Siddharth Seth — Computer Science student and Full-Stack Developer.',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        sizes: 'any',
      },
    ],
    shortcut: '/favicon.svg?v=2',
    apple: '/apple-touch-icon.svg?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <Script
          defer
          data-website-id="68e067ba369b1b7f1f096056"
          data-domain="toukoum.fr"
          data-allow-localhost="true"
          src="https://datafa.st/js/script.js"
        ></Script>
      </head>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ThemeToggle />
          <main className="flex min-h-screen flex-col">{children}</main>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
