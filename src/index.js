import { loadMovieList } from './build-gallery-components.js';
import { updateSearchTerm } from './search-component.js';
import movies from '../data/movies.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMovieUrl from './make-search-movie-url.js';




window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    const apiURL = makeSearchMovieUrl(queryOptions);
    fetch(apiURL).then(response => response.json()).then(resultjson => loadMovieList(resultjson.results));
});