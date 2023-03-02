let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let lastViewedFilm = prompt('Один из последних просмотренных фильмов?', ''),
    filmEvaluation = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastViewedFilm] = filmEvaluation;

console.log(personalMovieDB);
