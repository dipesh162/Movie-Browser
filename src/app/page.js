import { fetchMovies } from "./helpers/fetchMovies";
import Main  from "./components/Main";

const initialQueryParams = {
  PAGE: 1,
  QUERY: "",
  TYPE: 'movie',
  SORT: 'now_playing',
  YEAR: '2003',
  GENRE: '',
  GENRE_ID: [], 
  RATING_MIN: '4.0', 
  RATING_MAX: '5.0'
};

// Server Component
export default async function Home() {

  // Fetch data server-side
  const { data, error } = await fetchMovies(initialQueryParams);

  // Pass data to Client Component
  return (
    <main className="max-w-[80%] m-auto flex flex-col gap-4 ">
      <Main initialData={data} initialError={error} initialQueryParams={initialQueryParams} />
    </main>
  );
}
