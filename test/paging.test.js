const test = QUnit.test;
import testArray from '../data/movies.js';
QUnit.module('make a template for pagination');

test(' returns an paginayed array', function(assert) {
    //arrange
    const pagingOptions = {
        page: 1,
        perPage: 4
    };
}
    //our function takes an array of objects, and returns a sliced array based on the current page vs sum total of pages


    //act
    const result = pageArray(testArray);
    const expected = [
        {
            "vote_count": 10870,
            "id": 11,
            "video": false,
            "vote_average": 8.2,
            "title": "Star Wars",
            "popularity": 34.363,
            "poster_path": "/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",
            "original_language": "en",
            "original_title": "Star Wars",
            "genre_ids": [
                12,
                28,
                878
            ],
            "backdrop_path": "/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",
            "adult": false,
            "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
            "release_date": "1977-05-25"
        },
        {
            "vote_count": 3352,
            "id": 348350,
            "video": false,
            "vote_average": 6.6,
            "title": "Solo: A Star Wars Story",
            "popularity": 37.674,
            "poster_path": "/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg",
            "original_language": "en",
            "original_title": "Solo: A Star Wars Story",
            "genre_ids": [
                28,
                12,
                878
            ],
            "backdrop_path": "/pH0rtDSgBM98Ho8HgiEq8topsxL.jpg",
            "adult": false,
            "overview": "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
            "release_date": "2018-05-15"
        },
        {
            "vote_count": 8002,
            "id": 181808,
            "video": false,
            "vote_average": 7,
            "title": "Star Wars: The Last Jedi",
            "popularity": 33.615,
            "poster_path": "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
            "original_language": "en",
            "original_title": "Star Wars: The Last Jedi",
            "genre_ids": [
                14,
                12,
                878,
                28
            ],
            "backdrop_path": "/baNQpUlmX8shVmJBGHMSL5Y6MBl.jpg",
            "adult": false,
            "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
            "release_date": "2017-12-13"
        },
        {
            "vote_count": 12144,
            "id": 140607,
            "video": false,
            "vote_average": 7.4,
            "title": "Star Wars: The Force Awakens",
            "popularity": 26.98,
            "poster_path": "/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
            "original_language": "en",
            "original_title": "Star Wars: The Force Awakens",
            "genre_ids": [
                28,
                12,
                878,
                14
            ],
            "backdrop_path": "/njv65RTipNSTozFLuF85jL0bcQe.jpg",
            "adult": false,
            "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
            "release_date": "2015-12-15"
        }
    ];
    //assert


    assert.deepEqual(result, expected);
});