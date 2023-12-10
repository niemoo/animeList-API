import Image from 'next/image';
import Link from 'next/link';

export default function AnimeListCard({ id, title, images }) {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <div className="bg-indigo-500 rounded rounded-md">
        <Image src={images} alt="..." width={350} height={350} className="w-full max-h-64 object-cover" />
        <h3 className="font-semibold md:text-lg text-md p-3">{title}</h3>
      </div>
    </Link>
  );
}
