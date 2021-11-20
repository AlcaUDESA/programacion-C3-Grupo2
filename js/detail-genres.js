let queryStringGenres = location.search;
let queryStringObject = new URLSearchParams(queryStringGenres);
let id = queryStringObject.get("id");
let urlGenresMovie= `https://api.themoviedb.org/3/discover/movie?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate` 
 

let queryStringNombre = location.search
let queryStringObjectNombre = new URLSearchParams(queryStringNombre);
let nombre = queryStringObjectNombre.get("nombre")



fetch(urlGenresMovie)
    .then(function(response){
      return response.json()
})

   .then(function(data){
console.log(data);

//let seccionPeliculasGeneros = document.querySelector(".")
let contenedorPelis = document.querySelector(".contenedorPelisDetalle") 
let generosPeliculasLista="";
let info = data.results
console.log(info)
let subtitulo = document.querySelector(".subtitulo").innerText = `${nombre}`

for (let i=0; i<info.length; i++){

  generosPeliculasLista +=` <article class="articulosIndex">
  <div class="contenedorImagen">
  <a href="detail-movie.html?id=${info[i].id}"><img src="https://image.tmdb.org/t/p/w185/${info[i].poster_path}" alt="."> </a>      
  </div>
  <h3>${info[i].title}
  </h3>
  <p>${info[i].release_date}
  </p>
</article>`
    
   }
   contenedorPelis.innerHTML = generosPeliculasLista   

})

.catch(function (error) {
    console.log(error)
}
)


//Series


let urlGenresSeries = `https://api.themoviedb.org/3/discover/tv?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`

fetch(urlGenresSeries)
    .then(function(response){
      return response.json()
})

   .then(function(data){
console.log(data);

//let seccionPeliculasGeneros = document.querySelector(".")
let contenedorSeries = document.querySelector(".contenedorSeriesDetalle") 
let generosSeriesLista="";
let info = data.results
console.log(info)
let subtitulo = document.querySelector(".subtitulo").innerText = `${nombre}`

for (let i=0; i<info.length; i++){

  generosSeriesLista +=` <article class="articulosIndex">
  <div class="contenedorImagen">
  <a href="detail-movie.html?id=${info[i].id}"><img src="https://image.tmdb.org/t/p/w185/${info[i].poster_path}" alt="."> </a>      
  </div>
  <h3>${info[i].original_name}
  </h3>
  <p>${info[i].first_air_date}
  </p>
</article>`
    
   }
   contenedorSeries.innerHTML = generosSeriesLista   

})

.catch(function (error) {
    console.log(error)
}
)