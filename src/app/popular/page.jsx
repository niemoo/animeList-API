'use client';

import AnimeListCard from '@/components/AnimeList';
import Header from '@/components/Utilities/Header';
import Pagination from '@/components/Utilities/Pagination';
import { useEffect, useState } from 'react';
import { getAnimeResponse } from '@/app/libs/api-libs';

export default function Popular() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
    // const data = await response.json();
    const popularAnime = await getAnimeResponse('/top/anime', `page=${page}`);
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="p-5 mx-auto max-w-screen-xl">
      <Header title={`Popular Movies #${page}`} />
      <AnimeListCard api={topAnime} />
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
    </div>
  );
}
