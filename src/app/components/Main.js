'use client';

import { useState } from 'react';
import Header from './Header';
import MoviesList from './MoviesList';
import { fetchMovies } from '../helpers/fetchMovies';

export default function Main({ initialData, initialError, initialQueryParams }) {
  const [moviesData, setMoviesData] = useState({ data: initialData, error: initialError });

  const handleFilterChange = async (key, val) => {
    const newQueryParams = {
      ...initialQueryParams,
      [key]: val,
    };

    const { data, error } = await fetchMovies(newQueryParams);
    setMoviesData({ data, error });
  };

  return (
    <>
      <Header handleFilter={handleFilterChange} />
      <MoviesList data={moviesData.data} />
    </>
  );
}