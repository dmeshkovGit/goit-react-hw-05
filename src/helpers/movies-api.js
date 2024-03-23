import axios from "axios";

const KEY = "6ae10214248f755d1c2d48a4bd4a1fc3"

axios.defaults.baseURL = `https://api.themoviedb.org/3`

export const getMovies = async (query = "batman", page = 1) => {
    const response = await axios.get("/search/movie", {
        params: {
            api_key: KEY,
            query: query,
            include_adult: true,
            language: "en-US",
            page: page
    }});
    return response.data.results;
}

export const getTrendingMovies = async () => {
    const response = await axios.get("/trending/movie/day", {
        params: {
            api_key: KEY,
            language: "en-US",
    }});
    return response.data.results;
}

export const getMovieById = async (id) => {
    const response = await axios.get(`/movie/${id}`, {
        params: {
            api_key: KEY,
    }});
    return response.data;
}

export const getMovieCreditsById = async (id) => {
    const response = await axios.get(`/movie/${id}/credits`, {
        params: {
            api_key: KEY,
    }});
    return response.data;
}

export const getMovieReviewsById = async (id) => {
    const response = await axios.get(`/movie/${id}/reviews`, {
        params: {
            api_key: KEY,
    }});
    return response.data.results;
}