let queryStringSeries = location.search;
let queryStringObject = new URLSearchParams(queryStringSeries);
let id = queryStringObject.get("id");
let url =`https://api.themoviedb.org/3/tv/${id}?api_key=4bcb2ca1395628db6221ba6939b8c9d7`

fetch(url)
.then(function (response){
    return response.json();
})

.then (function(data){
    console.log(data);
    
    let titulo = document.querySelector(".tituloSerie");
    let imagen = document.querySelector(".imagenSerie");
    let subtitulo = document.querySelector(".subtitulosDetalles");
    let rating = document.querySelector(".ratingSerie");
    let fechaEstreno = document.querySelector(".fechaEstrenoSerie");
    let descripcionSerie = document.querySelector(".descripcionSerie");


    titulo.innerText = data.title;
    imagen.src =  `https://image.tmdb.org/t/p/w342/${data.poster_path}` ;
    subtitulo.innerText = data.title;
    rating.innerText = `Rating:${data.vote_average}`;
    fechaEstreno.innerText = `Fecha de estreno: ${data.release_date}`;
    descripcionSerie.innerText = data.overview;
})

.catch(function (error) {
    console.log("El error fue: " + error);
});