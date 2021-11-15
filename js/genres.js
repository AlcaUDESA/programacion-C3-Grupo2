//Documentación: https://developers.themoviedb.org/3/genres/get-movie-list
//Endpoint: https://api.themoviedb.org/3/genre/movie/list   

let urlGenresMovie= "https://api.themoviedb.org/3/genre/movie/list?api_key=531fb37b1ce0765b98bdef56966d3e48"  




    fetch(urlGenresMovie)
    .then(function(response){
      return response.json()

    })

   .then(function(data){
console.log(data.genres);
let genresMovie= document.querySelector(".contenedorGenres")
let genresLista="";

for (let i=0; i<19; i++){
    console.log(data.genres[i]);
    genresLista+= `<article class="articulosGenres"> <a href="detail-genres.html"> <h2> ${data.genres[i].name} </h2> </a></article>`;
    
    
   }
   genresMovie.innerHTML += genresLista
   
})

.catch(function (error) {
    console.log(error)
}
)









