import Link from 'next/link';
import Search from './InputSearch';

export default function Navbar() {
  return (
    <header className="bg-color-gray">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-3 mx-auto max-w-screen-xl">
        <Link href="/" className="font-semibold text-xl text-color-primary">
          YourAnimeList
        </Link>
        <Search />
      </div>
    </header>
  );
}
