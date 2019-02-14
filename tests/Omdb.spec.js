import { expect } from 'chai';
import omdb from '../src/js/Omdb.lib';

describe('Omdb Lib', () => {
    it('Should be an object', () => {
        expect(omdb).to.be.an('object');
    });

    it('Should have search exist', () => {
        expect(omdb.search).to.exist;
    });

    it('Should have movie exist', () => {
        expect(omdb.movie).to.exist;
    });
    
});