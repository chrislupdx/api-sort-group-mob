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