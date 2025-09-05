"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-4 border-b flex justify-between items-center">
      <h1 className="text-2xl font-bold"><Link href="/">我的技术博客</Link></h1>
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li><Link href="/" className="hover:underline">首页</Link></li>
          <li><Link href="/posts" className="hover:underline">文章</Link></li>
          <li><Link href="/admin" className="hover:underline">管理</Link></li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">☰</button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-white dark:bg-black border rounded-lg p-4">
          <nav className="flex flex-col items-center">
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="hover:underline" onClick={() => setIsMenuOpen(false)}>首页</Link></li>
              <li><Link href="/posts" className="hover:underline" onClick={() => setIsMenuOpen(false)}>文章</Link></li>
              <li><Link href="/admin" className="hover:underline" onClick={() => setIsMenuOpen(false)}>管理</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}