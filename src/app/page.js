import AnimeListCard from '@/components/AnimeListCard';

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  const anime = await response.json();

  return (
    <div className="p-5">
      <h1 className="my-3 font-semibold">Popular</h1>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="">
              <AnimeListCard id={data.mal_id} title={data.title} images={data.images.webp.image_url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
