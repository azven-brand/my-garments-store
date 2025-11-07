import '../styles/globals.css';
import Header from '../components/Header';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Garments Store',
  description: 'Free clothing eCommerce starter'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-6">{children}</main>
      </body>
    </html>
  );
}
