import { Metadata } from 'next';
import { ReactNode } from 'react';
import localFont from "next/font/local";
import "../globals.css"

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Branchez',
  description: 'A simple Next.js app with TypeScript and Tailwind CSS',
  keywords: ['next.js', 'typescript', 'tailwindcss'],
}
export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark
    }}>
  <html lang='en'>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
    >
      {children}
    </body>
  </html>
    </ClerkProvider >
  )
}