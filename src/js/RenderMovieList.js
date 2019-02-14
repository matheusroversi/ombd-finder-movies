function createMarkup(data) {
    return data.map(movie => `
        <tr class="list-item">
          <td><a data-movie-id="${movie.imdbID}" title="${movie.Title}">${movie.Title}</a></td>
          <td>${movie.Year}</td>
          <td>${movie.Genre}</td>
        </tr>`).join('');
  }
  
  export default function renderMovies(data, element) {

    const markup = createMarkup(data);
  
    element.innerHTML = markup;

    return data;
  }