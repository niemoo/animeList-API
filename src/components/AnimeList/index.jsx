import Image from 'next/image';
import Link from 'next/link';

export default function AnimeListCard({ api }) {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 w-full">
      {api.data?.map((data) => {
        return (
          <Link href={`/anime/${data.mal_id}`} className="cursor-pointer transition-all" key={data.mal_id}>
            <Image src={data.images.webp.large_image_url} alt="..." width={200} height={250} className="max-h-64 object-cover rounded rounded-md" />
            <h3 className="font-semibold text-sm mt-2 text-color-primary hover:text-color-accent">{data.title.length > 15 ? `${data.title.substring(0, 23)}...` : data.title}</h3>
            <p className="text-xs font-medium text-color-gray">{data.year}</p>
          </Link>
        );
      })}
    </div>
  );
}
