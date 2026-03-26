import peliculas from './peliculas.js'

console.log(peliculas);
//Los generos serán Acción (28), thriller(53), Aventura(12) `genre_ids`.
// peliculas Acción

const accion = peliculas.filter((pelicula) =>pelicula.genre_ids.includes(28));

console.log(accion);

const contenedorAccion = document.getElementById('genero-28');

const htmlAccion = accion.map((pelicula) =>{

    const urlImagen = `https://image.tmdb.org/t/p/w500` + pelicula.poster_path;

   return `
    <div class="peli-card">
      <img src="${urlImagen}" alt="${pelicula.title}">
      <p>${pelicula.title}</p> 
    </div>`;
})

contenedorAccion.innerHTML = htmlAccion.join(" ")


// Películas Thriller

const thriller = peliculas.filter((pelicula) => pelicula.genre_ids.includes(53));

console.log(thriller);

const contenedorThriller = document.getElementById('genero-53');

const htmlthriller = thriller.map((pelicula) => {

   const urlImagen = `https://image.tmdb.org/t/p/w500` + pelicula.poster_path;

   return `
    <div class="peli-card">
      <img src="${urlImagen}" alt="${pelicula.title}">
      <p>${pelicula.title}</p> 
    </div>`;


})

contenedorThriller.innerHTML = htmlthriller.join(" ")


// peliculas de Aventura

const aventura = peliculas.filter((pelicula) => pelicula.genre_ids.includes(12));

console.log(aventura);

const contenedorAventura = document.getElementById('genero-12');

const htmlAventura = aventura.map((pelicula) => {

   const urlImagen = `https://image.tmdb.org/t/p/w500` + pelicula.poster_path;

   return `
    <div class="peli-card">
      <img src="${urlImagen}" alt="${pelicula.title}">
      <p>${pelicula.title}</p> 
    </div>`;


})

contenedorAventura.innerHTML = htmlAventura.join(" ")





