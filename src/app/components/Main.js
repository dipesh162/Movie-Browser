'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Header from './Header';
import MoviesList from './MoviesList';
import { fetchMovies } from '../helpers/fetchMovies';

const emptyParams = {
    PAGE: 1,
    QUERY: "",
    TYPE: '',
    SORT: '',
    YEAR: '',
    GENRE: '',
    GENRE_ID: [], 
    RATING_MIN: '', 
    RATING_MAX: ''
  };

export default function Main({ initialData, initialError, initialQueryParams }) {
    const [filters, setFilters] = useState(initialQueryParams);
    const [moviesData, setMoviesData] = useState({ data: initialData.results, error: initialError });
    const observer = useRef();

    // Common function to handle setting movies data
    const updateMoviesData = (newData, newError) => {
        setMoviesData(prev => ({
            data: filters.PAGE > 1 ? [...prev.data , ...newData] : [...newData],
            error: newError
        }));
    };

    const loadMoreMovies = async (filters) => {

        const { data, error } = await fetchMovies(filters);
        if (data) updateMoviesData(data.results, null);
        if (error) updateMoviesData([], error);
    };

    useEffect(() => {
        if (filters.PAGE > 1) {
            loadMoreMovies(filters);
        }
    }, [filters.PAGE]);

    const handleFilterChange = async (key, val) => {
        const newQueryParams = {
            ...filters,
            [key]: Array.isArray(val) ? [...filters[key], val] : val,
            PAGE: 1, // Reset to page 1 when filters change
        };
   
        loadMoreMovies(newQueryParams)
        setFilters(newQueryParams);
    };

    const lastMovieRef = useCallback(
        (node) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setFilters((prev) => ({ ...prev, PAGE: prev.PAGE + 1 }));
                }
            });
            if (node) observer.current.observe(node);
        },
        []
    );

    return (
        <>
            <Header filters={filters} handleFilter={handleFilterChange} />
            {(!moviesData?.data.length && moviesData?.error) ?
                <h1>Error Finding Movies</h1> :
                <MoviesList data={moviesData.data} lastMovieRef={lastMovieRef} />
            }
        </>
    );
}
