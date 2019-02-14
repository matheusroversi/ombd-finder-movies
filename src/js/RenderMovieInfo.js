function createMarkup(data) {
    return `
    <figure><img width="250" src="${data.Poster}" alt="${data.Title}"></figure>
    <div class="content">
      <h2>${data.Title}</h2>
      <p>${data.Plot}</p>
      <p>
        <strong>Ano:</strong> <span>${data.Year}</span><br>
        <strong>Gerero:</strong> <span>${data.Genre}</span><br>
        <strong>Direção:</strong> <span>${data.Director}</span><br>
        <strong>Prêmios:</strong> <span>${data.Awards}</span>
      </p>
    </div>`;
  }
  
  export default function renderMovieInfo(data, element) {

    const markup = createMarkup(data);

    element.innerHTML = markup;

    return true;
  }