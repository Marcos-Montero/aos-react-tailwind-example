import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aos-react-tailwind | example",
  description: "aos-react-tailwind example by Marcos Montero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative w-screen overflow-x-hidden">
        {children}
        <div className="bg" />
      </body>
    </html>
  );
}
