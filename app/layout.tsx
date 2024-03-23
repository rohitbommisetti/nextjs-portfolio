import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';

export const metadata: Metadata = {
  metadataBase: new URL('https://bommisetti.org'),
  title: {
    default: 'Rohit Bommisetti',
    template: '%s | Rohit Bommmisetti',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    url: 'https://bommisetti.org',
    type: 'website',
    title: 'Rohit Bommisetti',
    description: 'Software engineer who loves to build products.',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/documents/a58acde8-2896-4356-be32-895df61b63c2.jpg?token=wk0STYgxx0Gd12jaMGDccu9JLY8CXQ50oh_1_P0Iw3Q&height=900&width=1200&expires=33247162807',
        width: 1200,
        height: 900,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Bommisetti',
    description: 'Software engineer who loves to build products.',
    images: [
      'https://opengraph.b-cdn.net/production/documents/a58acde8-2896-4356-be32-895df61b63c2.jpg?token=wk0STYgxx0Gd12jaMGDccu9JLY8CXQ50oh_1_P0Iw3Q&height=900&width=1200&expires=33247162807',
    ],
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
  icons: {
    icon: '/app/favicon.ico', // /public path
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
