import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-3">
        <Link href="/" className="font-semibold text-xl">
          YourAnimeList
        </Link>
        <input type="search" placeholder="Search Anime..." className="p-2 md:mt-0 mt-1 text-black rounded-md border border-gray-400" />
      </div>
    </header>
  );
}
