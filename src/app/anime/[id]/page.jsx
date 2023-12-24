import { getAnimeResponse } from '@/app/libs/api-libs';
import VideoPlayer from '@/components/Utilities/VideoPlayer';

export default async function SpecifiedPage({ params: { id } }) {
  const specifiedAnime = await getAnimeResponse(`/anime/${id}`);
  console.log(specifiedAnime);

  return (
    <div className="max-w-md">
      <p className="text-color-primary">{specifiedAnime.data.title}</p>
      <p className="text-color-primary">{specifiedAnime.data.synopsis}</p>
      <VideoPlayer youtubeId={specifiedAnime.data.trailer.youtube_id} />
      <div></div>
    </div>
  );
}
