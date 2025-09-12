import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Auth0Provider } from '@auth0/nextjs-auth0';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soisi - P2P Betting Platform',
  description: 'Bet on games, sports, and personal challenges',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full overflow-hidden`}>
        <Auth0Provider>
          {children}
        </Auth0Provider>
      </body>
    </html>
  );
}
