console.log("favoritos")

//Recupero Storage//

let recuperoStorage = localStorage.getItem("favoritos");
//Transformamos el JSON en un array
let favoritos = JSON.parse(recuperoStorage)
console.log(favoritos);

//Capturamos el contenedor del elemento a mostrar

let section = document.querySelector(".contenedorArticulosFavoritosPelicula");
let peliculasFavoritas = ""

//Si el storage está vacío indicamos al usuario que no hay favoritos seleccionados

if(favoritos==null || favoritos.length == 0 ) {
    section.innerHTML = "<p>¡No hay favoritos seleccionados!</p>"
}
else{
    //for para recorrer el array 
    for (let i=0; i<favoritos.length; i++){
        buscarYMostrarFavoritosPeliculas(favoritos[i])
    }
}

function buscarYMostrarFavoritosPeliculas(id){

    //Fetch para buscar cada elemento del Array
        let urlMovies = `https://api.themoviedb.org/3/movie/${id}?api_key=4bcb2ca1395628db6221ba6939b8c9d7`
    
        fetch(urlMovies)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            peliculasFavoritas += 
            `
            <article class="articulosIndex">
            <div class="contenedorImagen">
                <a href="detail-movie.html?id=${info[i].id}">
                    <img src= "https://image.tmdb.org/t/p/w185/${info[i].poster_path}" alt="">
                </a>
            </div>
            <h3>${info[i].title}</h3>
            <p>${info[i].release_date}</p>
        </article>`;
            
    
            section.innerHTML = peliculasFavoritas
        })
        .catch(function(error) {
            console.log("El error fue: " + error);
        });
    
    }

//PARA SERIES//
let sectionDos = document.querySelector(".contenedorArticulosFavoritosSerie");
let seriesFavoritas = ""


if(favoritos==null || favoritos.length == 0 ) {
    section.innerHTML = "<p>¡No hay favoritos seleccionados!</p>"
}
else{
    //for para recorrer el array 
    for (let i=0; i<favoritos.length; i++){
        buscarYMostrarFavoritosSeries(favoritos[i])
    }
}




