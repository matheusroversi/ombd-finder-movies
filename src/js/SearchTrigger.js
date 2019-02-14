import omdb from './Omdb.lib';
import includeGenre from './IncludeGenre';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

function makeRequest(){
    omdb.search.movies(searchInput.value)
        .then(data => {
            (data.hasOwnProperty("Search")) ? includeGenre(data.Search) : alert('Sua pesquisa não retornou nenhum resultado');
        });
}

export default function searchEnterTrigger() {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        makeRequest();
    });
}