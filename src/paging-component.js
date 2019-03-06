import { writePageToQuery } from './hash-query.js';
const pageButtonsNode = document.getElementById('page-buttons');
const previousButtonNode = document.getElementById('previous-button');
const nextButtonNode = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPageNode = document.getElementById('total-pages');

let currentPageNumber = 1;

export function updatePagingInfo(pagingInfo){
    currentPageNumber = pagingInfo.page;
    currentPageNode.textContent = currentPageNumber;
    totalPageNode.textContent = pagingInfo.totalPages;
    nextButtonNode.disabled = currentPageNumber === pagingInfo.totalPages;
    previousButtonNode.disabled = currentPageNumber === 1;
}

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
    console.log(existingQuery);
}
nextButtonNode.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
});

previousButtonNode.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});
