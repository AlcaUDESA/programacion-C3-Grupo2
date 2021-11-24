 //Validacion del formulario//

 let formulario = document.querySelector(".buscadorHeader");
 let inputField = document.querySelector("#buscadorHeaderInput");
 
 formulario.addEventListener("submit", function (evento) {
   evento.preventDefault()
     if (inputField.value == "") {
         alert("La busqueda no puede estar vacia!!")
     } else if (inputField.value.length <= 3) {
         alert("El termino a buscar debe tener al menos tres caracteres")
     } else {
         this.submit();
     }
 
 });



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
let info = data.genres
for (let i=0; i<19; i++){
    console.log(data.genres[i]);
    genresLista+= ` <article class="articulosGenres"> <a href="detail-genres.html?id=${info[i].id}&nombre=${data.genres[i].name}"> <h2> ${data.genres[i].name} </h2> </a></article>`;
    
    
   }
   genresMovie.innerHTML += genresLista
   
})

.catch(function (error) {
    console.log(error)
}
)








//series


let urlGenresSeries= "https://api.themoviedb.org/3/genre/tv/list?api_key=531fb37b1ce0765b98bdef56966d3e48"  




    fetch(urlGenresSeries)
    .then(function(response){
      return response.json()

    })

   .then(function(data){
console.log(data.genres);
let info = data.genres
let genresSeries= document.querySelector(".contenedorGenresSeries")
let genresListaSeries="";

for (let i=0; i<16; i++){
    console.log(data.genres[i]);
    genresListaSeries+= ` <article class="articulosGenres"> <a href="detail-genres.html?id=${info[i].id}&nombre=${data.genres[i].name}"> <h2> ${data.genres[i].name} </h2> </a></article>`;
    
    
   }
   genresSeries.innerHTML += genresListaSeries
   
})

.catch(function (error) {
    console.log(error)
}
)









