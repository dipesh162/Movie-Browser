import { fetchMovies } from "./helpers/fetchMovies";
import Main  from "./components/Main";

// Server Component
export default async function Home() {
  const initialQueryParams = {
    query: "",
    type: 'movie',
    sort: 'now_playing',
  };

  // Fetch data server-side
  const { data, error } = await fetchMovies(initialQueryParams);

  // Pass data to Client Component
  return (
    <main className="max-w-[80%] m-auto flex flex-col gap-4 ">
      <Main initialData={data} initialError={error} initialQueryParams={initialQueryParams} />
    </main>
  );
}
