'use client';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;

    if (!keyword) return;

    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault();
      router.push(`/search/${searchRef.current.value}`);
    }
  };

  return (
    <div className="relative">
      <input placeholder="Search Anime..." className="w-full p-2 md:mt-0 mt-1 text-black rounded-md border border-gray-400" ref={searchRef} onKeyPress={handleSearch} />
      <button className="absolute md:top-2 top-3 pb-1 end-2 bg-white" onClick={handleSearch}>
        <MagnifyingGlass size={24} color="#0d0c0c" weight="bold" className="" />
      </button>
    </div>
  );
}
