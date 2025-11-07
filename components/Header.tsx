'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl">AZVEN</Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
