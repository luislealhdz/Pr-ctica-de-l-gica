"use-strict";

const movies = [];

const username = promt("Escribe tu nombre de usuario");
const age = promt("Escribe tu edad");

const totalMovies = prompt("¿Cuántas películas favoritas tienes?");

for (let i = 0; i <= parseInt(totalMovies); i++) {
    const movie = prompt(`Película ${i + 1}`);
    movies.push(movie);
}
