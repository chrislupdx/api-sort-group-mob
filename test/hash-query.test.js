const test = QUnit.test;

QUnit.module('hash query');

function writeSearchToQuery(existingQuery, searchTerm){
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

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

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

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

function readFromQuery(queryOptions){
    const searchParams = new URLSearchParams(queryOptions);
    const searchObject = {
        searchTerm: searchParams.get('searchTerm'),
        page: parseInt(searchParams.get('page'))
    };
    return searchObject;
}

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