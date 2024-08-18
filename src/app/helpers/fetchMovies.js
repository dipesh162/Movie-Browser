import axios from 'axios';

const API_KEY = '2cc0a9ffe9ea203688b1b67df791788a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (queryParams) => {
    const queryString = new URLSearchParams(queryParams).toString();
    const url = `${BASE_URL}/${queryParams.type}/${queryParams.sort}?api_key=${API_KEY}&query=${queryParams.query}`
    console.log(9, url)
    try {
      const response = await axios.get(url);
      console.log(11)
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error.message };
    }
};