import { getAnimeResponse } from '@/app/libs/api-libs';

export default async function SpecifiedPage({ params }) {
  const { id } = params;
  const specifiedAnime = await getAnimeResponse('/anime', `${id}`);

  return (
    <div>
      <p className="text-color-primary">{id}</p>
    </div>
  );
}
