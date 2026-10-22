import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hire Job-Ready DevOps & Cloud Talent | DIM — DevOps Institute of Mumbai',
  description: 'Hire pre-screened freshers, Cloud Support Engineers, Monitoring Engineers, Junior DevOps, and experienced DevOps & Cloud professionals from DevOps Institute of Mumbai (DIM).',
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
  openGraph: {
    title: 'Hire Job-Ready DevOps & Cloud Talent | DIM',
    description: 'Screened freshers and experienced DevOps, Cloud & Infrastructure talent ready for immediate interviews.',
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
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
