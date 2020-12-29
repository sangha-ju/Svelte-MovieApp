import axios from "axios";
import _unionby from "lodash/unionBy";
import { writable, get } from "svelte/store";

export const movies = writable([]);
export const loading = writable(false);

export async function searchMovies(payload) {
    if(get(loading)) return;
    loading.set(true);

    const { title, type, year, number } = payload;
    const OMDB_API_KEY = "a604d4c9";

    const res = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`)
    console.log(res);

    const { Search, totalResults } = res.data;
    movies.set(Search);

    const pageLength = Math.ceil(totalResults / 10);

    if(pageLength > 1) {
        for(let page = 2; page <= pageLength; page += 1) {
            if(page > (number / 10)) break;
            const res = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
            const { Search } = res.data;
            movies.update($movies => _unionby($movies, Search, "imdbID")) 
        }
    }

    loading.set(false);
}