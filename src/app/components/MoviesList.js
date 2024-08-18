'use client'

import React from 'react'
import MovieCard from './MovieCard'

function MoviesList({data}) {
    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                data.results.map((movie,i)=>(
                    <MovieCard
                        movie={movie}
                        key={i}
                    />
                ))
            }
        </div>
    )
}

export default MoviesList