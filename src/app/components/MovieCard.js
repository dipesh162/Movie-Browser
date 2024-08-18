import Image from "next/image";

export default function MovieCard ({ movie }){
    console.log(4, movie)
    return(
        <div className="p-4 border border-gray-200 rounded">
            <Image 
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                // fill={true}
                width={500}
                height={500}
                className="w-full h-auto relative"
            />
            <h2 className="mt-2 text-xl font-bold text-center">{movie.title}</h2>
            <h4>{movie.overview}</h4>
            <p>{movie.Year}</p>
        </div>
    )
}