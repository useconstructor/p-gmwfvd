import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788850072089',
  description: 'DentalBright is a premium yet approachable dental clinic website for Spanish-speaking markets, combining cosmetic and general dentistry services with transparent treatment plans, social proof, and seamless online appointment booking. The experience emphasizes advanced technology, experienced practitioners, patient trust, and instant email confirmations.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#FFFFFF', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
