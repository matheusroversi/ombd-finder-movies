import omdb from './Omdb.lib';
import renderMovieInfo from './RenderMovieInfo';

const listMovies = document.getElementById('movie-list');
const movieInfo = document.getElementById('movie-info');
const modal = document.getElementById('modal_');

function makeRequest(movieId) {
  omdb.movie.getMovie(movieId)
    .then(data => renderMovieInfo(data, movieInfo))
    .then(modal.classList.add('active'));
}

export default function selectMovieTrigger() {
  listMovies.addEventListener('click', (e) => {
    const target = e.target;
    makeRequest(target.getAttribute('data-movie-id'));
  });
  
}