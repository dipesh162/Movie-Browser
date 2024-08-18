'use client'

import React from 'react';
import MovieCard from './MovieCard';

function MoviesList({ data, lastMovieRef }) {
    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {data.map((movie, i) => {
                if (data.length === i + 1) {
                    return (
                        <MovieCard
                            movie={movie}
                            key={i}
                            ref={lastMovieRef}
                        />
                    );
                } else {
                    return <MovieCard movie={movie} key={i} />;
                }
            })}
        </div>
    );
}

export default MoviesList;
