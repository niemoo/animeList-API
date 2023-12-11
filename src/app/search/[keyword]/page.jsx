import { getAnimeResponse } from '@/app/libs/api-libs';
import AnimeList from '@/components/AnimeList';
import Header from '@/components/Utilities/Header';

export default async function SearchPage({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  // const searchAnime = await response.json();

  const searchAnime = await getAnimeResponse('/anime', `q=${keyword}`);

  return (
    <div className="p-5 mx-auto max-w-screen-xl">
      <section>
        <Header title={`Results found : ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
}
