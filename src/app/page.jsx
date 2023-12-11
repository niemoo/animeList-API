import AnimeList from '@/components/AnimeList';
import Header from '@/components/Utilities/Header';
import { getAnimeResponse } from '@/app/libs/api-libs';

export default async function Home() {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  // const topAnime = await response.json();
  const topAnime = await getAnimeResponse('/top/anime', `limit=10`);

  return (
    <div className="p-5 mx-auto max-w-screen-xl">
      <section>
        <Header title="Popular" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Newest" linkHref="/new" />
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
}
