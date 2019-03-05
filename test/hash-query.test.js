import { writePageToQuery, readFromQuery, writeSearchToQuery } from '../src/hash-query.js';
const test = QUnit.test;

QUnit.module('hash query');

test('adds search to emply hash', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'silent bob';

    //act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(result, 'searchTerm=silent+bob&page=1');
});

test('write search to existing query changes search and resets page', assert =>{
    //arrange
    const existingQuery= 'searchTerm=silent+bob&page=1';
    const searchTerm = 'silent hill';
    //act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    //asssert
    assert.equal(result, 'searchTerm=silent+hill&page=1');
});



test('write page to existing query', assert => {
    //arrange
    const existingQuery = 'searchTerm=silent+bob&page=1';
    const page = 3;
    //act
    const result = writePageToQuery(existingQuery, page);
    const expected = 'searchTerm=silent+bob&page=3';
    //assert
    assert.equal(result, expected);
});


test('reads options from query', assert => {
    //arrange 
    //to feed the function, we need querystrings, 
    const queryOptions = 'searchTerm=silent+bob&page=3';
    const expected = {
        searchTerm: 'silent bob',
        page: 3
    };
    //act
    const result = readFromQuery(queryOptions);
    //assert
    assert.deepEqual(result, expected);
});