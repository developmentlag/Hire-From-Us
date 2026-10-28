import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hire DevOps & Cloud Talent | DIM — DevOps Institute of Mumbai',
  description: 'Explore DevOps and Cloud candidate profiles from DevOps Institute of Mumbai. Discuss role requirements, current availability and employer hiring support directly with the placement desk.',
  keywords: [
    'DevOps Hire',
    'Hire Cloud Engineers',
    'Hire Freshers DevOps',
    'Cloud Support Engineers Mumbai',
    'Monitoring Engineers',
    'SRE Talent',
    'DevOps Institute Mumbai Hiring'
  ],
  authors: [{ name: 'DevOps Institute of Mumbai' }],
  icons: {
    icon: '/favicon-white-larger.png',
    shortcut: '/favicon-white-larger.png',
    apple: '/favicon-white-larger.png',
  },
  openGraph: {
    title: 'Hire Job-Ready DevOps & Cloud Talent | DIM',
    description: 'Explore DevOps, Cloud and infrastructure candidate profiles and discuss current availability with the placement desk.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen pb-16 sm:pb-0">
        {children}
      </body>
    </html>
  );
}
