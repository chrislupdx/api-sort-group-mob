export default function renderHtmlMovieTemplate(movieObject){
    const html = /*html*/`<li>
    <h2>${movieObject.title}</h2>
    <img src="http://image.tmdb.org/t/p/w92${movieObject.poster_path}">
    <h3>${movieObject.release_date}</h3>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const movieListNode = document.getElementById('movie-list');

export function loadMovieList(movieArray) {
    clearMovies();
    
    movieArray.forEach(movie => {
        const dom = renderHtmlMovieTemplate(movie);
        movieListNode.appendChild(dom);
    });
}

function clearMovies(){
    while(movieListNode.children.length > 0){
        movieListNode.lastElementChild.remove();
    }
}