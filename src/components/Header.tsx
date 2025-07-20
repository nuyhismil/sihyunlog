// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6">
      <div className="max-w-2xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold no-underline">
          Sihyun-Lim
        </Link>
        <nav className="flex gap-4">
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-black">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;