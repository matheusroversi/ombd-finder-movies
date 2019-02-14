import 'jsdom-global/register';
import chai, { expect } from 'chai';
import chaiHtml from 'chai-html';
chai.use(chaiHtml);
import renderMovie from '../src/js/RenderMovieList';

describe('Render Movie List', () => {
    it('Should exist', () => {
        expect(renderMovie).exist;
    });

    const data = [
      {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Year": "2011",
        "imdbID": "tt1201607",
        "Type": "movie",
        "Genre": "Aventura"
        }
      ];
    
      const data2 = [
        {
          "Title": "Harry Potter and the Deathly Hallows: Part 2",
          "Year": "2011",
          "imdbID": "tt1201607",
          "Type": "movie",
          "Genre": "Aventura"
          },
          {
          "Title": "Harry Potter and the Sorcerer's Stone",
          "Year": "2001",
          "imdbID": "tt0241527",
          "Type": "movie",
          "Genre": "Aventura"
          }
      ];
    
      const markup = `
          <tr class="list-item">
            <td><a data-movie-id="${data[0].imdbID}" title="${data[0].Title}">${data[0].Title}</a></td>
            <td>${data[0].Year}</td>
            <td>${data[0].Genre}</td>
          </tr>`;
    
      const markup2 = `
          <tr class="list-item">
            <td><a data-movie-id="${data2[0].imdbID}" title="${data2[0].Title}">${data2[0].Title}</a></td>
            <td>${data2[0].Year}</td>
            <td>${data2[0].Genre}</td>
          </tr>
          <tr class="list-item">
            <td><a data-movie-id="${data2[1].imdbID}" title="${data2[1].Title}">${data2[1].Title}</a></td>
            <td>${data2[1].Year}</td>
            <td>${data2[1].Genre}</td>
          </tr>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('tbody');
    renderMovie(data, element);
    expect(element.innerHTML).html.to.equal(markup);
  });

  it('should create and append when more than 1 movie', () => {
    const element2 = document.createElement('tbody');
    renderMovie(data2, element2);
    expect(element2.innerHTML).html.to.equal(markup2);
  });


});