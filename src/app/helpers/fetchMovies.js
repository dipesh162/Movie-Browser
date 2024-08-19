import axios from 'axios';

const API_KEY = '2cc0a9ffe9ea203688b1b67df791788a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (queryParams) => {
    const { 
        PAGE = 1, 
        TYPE = 'movie', 
        SORT = 'popular', 
        QUERY = "", 
        GENRE_ID = "", 
        YEAR = "", 
        RATING_MIN = "", 
        RATING_MAX = "" 
    } = queryParams;

    let url;

    // If a search query is provided, use the search endpoint
    if (QUERY) {
        url = new URL(`${BASE_URL}/search/movie`);
        url.searchParams.append('query', QUERY);
    } else {
        // Use the discover endpoint for filtering based on various criteria
        url = new URL(`${BASE_URL}/discover/${TYPE}`);
    }

    url.searchParams.append('api_key', API_KEY);
    url.searchParams.append('page', PAGE);

    // Append additional filters for the discover endpoint
    if (!QUERY) {
        if (SORT) url.searchParams.append('sort_by', SORT);
        if (GENRE_ID) url.searchParams.append('with_genres', GENRE_ID);
        if (YEAR) url.searchParams.append('primary_release_year', YEAR);
        if (RATING_MIN) url.searchParams.append('vote_average.gte', RATING_MIN);
        if (RATING_MAX) url.searchParams.append('vote_average.lte', RATING_MAX);
    }

    try {
        const response = await axios.get(url.toString());
        return { data: response.data, error: null };
    } catch (error) {
        return { data: null, error: error.message };
    }
};
