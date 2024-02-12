import type { Metadata } from 'next';

import './globals.css';
import localFont from 'next/font/local';

const codePro = localFont({
  src: [
    {
      path: '../fonts/Codec-Pro-Regular.ttf',
      weight: '600'
    },
    {
      path: '../fonts/Codec-Pro-Light.ttf',
      weight: '200'
    },
    {
      path: '../fonts/Codec-Pro-Extrabold.ttf',
      weight: '600'
    }
  ],
  variable: '--font-codePro'
});

export const metadata: Metadata = {
  title: 'Verify my age',
  description: 'Test to front-end developer position'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${codePro.variable} _global_container`}>
        {children}
      </body>
    </html>
  );
}
