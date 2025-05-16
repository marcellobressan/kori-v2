import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">Kori</Link>
        </div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          </li>
          <li>
            <Link href="/manifesto" className="hover:text-gray-300">Manifesto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
