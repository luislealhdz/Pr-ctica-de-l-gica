"use-strict";

const movies = [];

const username = prompt("Escribe tu nombre de usuario");
const age = prompt("Escribe tu edad");

const totalMovies = prompt("¿Cuántas películas favoritas tienes?");

for (let i = 0; i < parseInt(totalMovies); i++) {
    const movie = prompt(`Película ${i + 1}`);
    movies.push(movie);
}

console.log(username);
console.log(age);
for (const film of movies) {
    console.log(`The film ${film} is one of my favorites`);
}
