import Image from "next/image";
import Bookmark from "./Bookmark";
import React from 'react';

const MovieCard = React.forwardRef(({ movie }, ref) => {
    return (
        <div className="border border-gray-300 rounded-2xl relative overflow-hidden " ref={ref}>
            <Bookmark id={movie.id} />
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                width={500}
                height={500}
                className="w-full h-auto relative rounded-t-2xl"
            />
            <div className="p-4">
                <div className="flex items-center gap-1.5 justify-between">
                    <div className="flex gap-2 items-center">
                        <Image
                            src={`/images/star.svg`}
                            alt={'Ratings'}
                            width={20}
                            height={20}
                            className="relative"
                        />
                        <span className="mt-0.5 font-semibold ">{`${Math.floor(movie.vote_average)}.${Math.floor((movie.vote_average % 1) * 10)}`}</span>
                    </div>
                    <h3 className="font-semibold">{(movie.first_air_date)?.substr(0, 4) || (movie.release_date)?.substr(0, 4)}</h3>
                </div>

                <h2 className="mt-2 text-xl font-bold line-clamp-2 h-[62px]">{movie.name || movie.title}</h2>
                <h4 className="line-clamp-4 h-[96px]">{movie.overview}</h4>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
});

MovieCard.displayName = 'MyComponent';

export default MovieCard;
