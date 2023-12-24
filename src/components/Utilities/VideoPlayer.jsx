'use client';

import Youtube from 'react-youtube';

export default function VideoPlayer({ youtubeId }) {
  const option = {
    width: '500',
    height: '250',
  };

  return (
    <div>
      <Youtube videoId={youtubeId} onReady={(e) => e.target.pauseVideo()} opts={option} />
    </div>
  );
}
