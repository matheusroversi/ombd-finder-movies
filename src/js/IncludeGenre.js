import omdb from './Omdb.lib';
import renderMovies from './RenderMovieList';

let count = 0;
let total = 0;
let data2;
const movieList = document.getElementById('movie-list');

export default function includeGenre(data){
    total = data.length;
    count = 0;
    data2 = data;

    data.map((item, index) => {
        omdb.movie.getMovie(item.imdbID)
            .then(genre => {
                count++;
                data2[index].Genre = genre.Genre;
                (count === total) ? renderMovies(data2, movieList) : '';
            });
    });
}   