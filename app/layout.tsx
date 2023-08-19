import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

// Meta Data
export const metadata: Metadata = {
  metadataBase: new URL('https://template-next13.vercel.app/'),
  title: {
    default: 'Next13-Template',
    template: '%s | Next13-Template',
  },
  description:
    'Discover the Ultimate Next13 Template: Unleash the Power of TypeScript, TailwindCSS, schadcnui, tanstack, husky, and Beyond! Dive into a Dynamic Sandbox Loaded with Stylish Forms, Engaging Buttons, Delicious Toasts, and Sleek Tables. Craft Your Dream Project with Infinite Customization Possibilities!',
  verification: {
    google: 'vHFS_i2JTa4SbtokZ6dHtPXhruGUBNqsSs3lLjCLnCo',
  },
  robots: {
    index: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn('', inter.className)}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
