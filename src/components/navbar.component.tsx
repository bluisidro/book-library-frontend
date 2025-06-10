import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 mb-8 shadow">
      <div className="max-w-5xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">My Book App</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/authors" className="hover:underline">Authors</Link>
        </div>
      </div>
    </nav>
  );
}
