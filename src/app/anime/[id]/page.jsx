import { getAnimeResponse } from '@/app/libs/api-libs';
import VideoPlayer from '@/components/Utilities/VideoPlayer';
import Image from 'next/image';

export default async function SpecifiedPage({ params: { id } }) {
  const specifiedAnime = await getAnimeResponse(`/anime/${id}`);
  console.log(specifiedAnime);

  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="md:flex">
        <Image src={specifiedAnime.data.images.webp.large_image_url} width={250} height={150} />
        <aside className="ml-10 mt-2">
          <h1 className="text-color-primary text-4xl font-semibold">{specifiedAnime.data.title}</h1>
          <p className="text-color-primary text-sm md:mt-10 w-4/5">{specifiedAnime.data.synopsis}</p>
        </aside>
      </div>
      <VideoPlayer youtubeId={specifiedAnime.data.trailer.youtube_id} />
      <div></div>
    </div>
  );
}
