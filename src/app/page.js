import { fetchMovies } from "./helpers/fetchMovies";
import Main  from "./components/Main";

const initialQueryParams = {
  PAGE: 1,
  QUERY: "",
  TYPE: 'movie',
  SORT: 'popular',
  YEAR: '2024',
  GENRE_ID: '', 
  RATING_MIN: '4.0', 
  RATING_MAX: '5.0'
};

// Server Component
export default async function Home() {

  // Fetch data server-side
  const { data, error } = await fetchMovies(initialQueryParams);

  // Pass data to Client Component
  return (
    <main className="max-w-[95%] md:max-w-[75%] m-auto flex flex-col gap-4 px-3 md:px-6 py-4 md:py-8">
      <Main initialData={data} initialError={error} initialQueryParams={initialQueryParams} />
    </main>
  );
}
