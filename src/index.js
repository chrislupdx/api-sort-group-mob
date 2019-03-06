import { loadMovieList } from './build-gallery-components.js';
import { updateSearchTerm } from './search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMovieUrl from './make-search-movie-url.js';
import { updatePagingInfo } from './paging-component.js';




window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    const apiURL = makeSearchMovieUrl(queryOptions);
    updateSearchTerm(queryOptions.searchTerm);
    fetch(apiURL)
        .then(response => response.json())
        .then(resultjson => {
            loadMovieList(resultjson.results);
            const pagingInfo = {
                page: resultjson.page,
                totalPages: resultjson.total_pages
            };
            updatePagingInfo(pagingInfo);
        });
});