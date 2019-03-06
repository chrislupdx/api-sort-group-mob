import { loadMovieList } from './build-gallery-components.js';
import { updateSearchTerm } from './search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMovieUrl from './make-search-movie-url.js';
import { updatePagingInfo } from './paging-component.js';

const prompt = document.getElementById('prompt');
const pageButtons = document.getElementById('page-buttons');

loadQuery();
window.addEventListener('hashchange', loadQuery);


function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    const apiURL = makeSearchMovieUrl(queryOptions);
    updateSearchTerm(queryOptions.searchTerm);
    if(!apiURL) {
        prompt.classList.remove('hidden');
        pageButtons.classList.add('hidden');
        return;
    }
    else {
        prompt.classList.add('hidden');
        pageButtons.classList.remove('hidden');
        console.log(apiURL);
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
    }
    //line 33 throwing an error about the forEach being undefined 
}