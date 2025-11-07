'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-xl">AZVEN</Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <a href="https://wa.me/9665XXXXXXXX" target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
