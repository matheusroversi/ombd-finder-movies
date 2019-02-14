import 'jsdom-global/register';
import chai, { expect } from 'chai';
import chaiHtml from 'chai-html';
chai.use(chaiHtml);
import renderMovieInfo from '../src/js/RenderMovieInfo';

describe('MovieInfo', () => {

  it('Should exist', () => {
    expect(renderMovieInfo).exist;
  });

    const data =
    {
      "Title": "Harry Potter and the Deathly Hallows: Part 2",
      "Year": "2011",
      "Rated": "PG-13",
      "Released": "15 Jul 2011",
      "Runtime": "130 min",
      "Genre": "Adventure, Drama, Fantasy, Mystery",
      "Director": "David Yates",
      "Writer": "Steve Kloves (screenplay), J.K. Rowling (novel)",
      "Actors": "Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe",
      "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Nominated for 3 Oscars. Another 45 wins & 91 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.1/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "96%"
      },
      {
      "Source": "Metacritic",
      "Value": "87/100"
      }
      ],
      "Metascore": "87",
      "imdbRating": "8.1",
      "imdbVotes": "673,121",
      "imdbID": "tt1201607",
      "Type": "movie",
      "DVD": "11 Nov 2011",
      "BoxOffice": "$381,000,185",
      "Production": "Warner Bros. Pictures",
      "Website": "http://www.HarryPotter.com/",
      "Response": "True"
      };

    const markup = `
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
    
    it('should create and append the markup given a correct data', () => {
        const element = document.createElement('div');
        renderMovieInfo(data, element);
        expect(element.innerHTML).html.to.equal(markup);
      });

});