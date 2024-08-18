import axios from 'axios';

const API_KEY = '2cc0a9ffe9ea203688b1b67df791788a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (queryParams) => {
    const { 
        PAGE,
        TYPE, 
        SORT,
        QUERY, 
        GENRE_ID, 
        YEAR, 
        RATING_MIN, 
        RATING_MAX,
    } = queryParams;

    // Build URL with conditional query parameters
    const url = new URL(`${BASE_URL}/${TYPE}/${SORT}`);
    url.searchParams.append('api_key', API_KEY);

    if (GENRE_ID) url.searchParams.append('with_genres', GENRE_ID);
    if (PAGE) url.searchParams.append('page', PAGE);
    if (YEAR) url.searchParams.append('primary_release_year', YEAR);
    if (RATING_MIN) url.searchParams.append('vote_average.gte', RATING_MIN);
    if (RATING_MAX) url.searchParams.append('vote_average.lte', RATING_MAX);
    if (QUERY) url.searchParams.append('query', QUERY);

    try {
        const response = await axios.get(url.toString());
        console.log(response);
        return { data: response.data, error: null };
    } catch (error) {
        console.log(error);
        return { data: null, error: error.message };
    }
};
