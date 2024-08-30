'use client';

import React from 'react';
import MovieCard from './MovieCard';

function MoviesList({ data, lastMovieRef }) {
    if(!data.length){
        return <h1 className='mt-4 font-bold text-4xl text-center'>No Results</h1>
    }
    
    else {
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
}

export default MoviesList;
