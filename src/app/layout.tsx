import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const raleway = localFont({
  src: [
    {
      path: '../../public/assets/fonts/raleway-v34-latin-100.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/raleway-v34-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bas Kamer',
  description: 'back in the seventies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-[var(--font-raleway)]`}>
        {children}
      </body>
    </html>
  );
}