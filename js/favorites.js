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




 
 //FAVORITOS DE PELICULAS//
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

if(favoritos == null || favoritos.length == 0 ) {
    favoritosTitular.innerText = "¡No hay favoritos seleccionados!"

}
else{
    //for para recorrer el array que tiene los favoritos
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
                <a href="detail-movie.html?id=${data.id}">
                    <img src= "https://image.tmdb.org/t/p/w342/${data.poster_path}" alt="">
                </a>
            </div>
            <h3>${data.title}</h3>
            <p>${data.release_date}</p>
        </article>`;
            
    
            section.innerHTML = peliculasFavoritas
        })
        .catch(function(error) {
            console.log("El error fue: " + error);
        });
    
    }

                        //FAVORITOS DE SERIES//
                        console.log("favoritos")
                        //Recupero Storage//
                        
                        let recuperoStorageDos = localStorage.getItem("favoritosSeries");
                        //Transformamos el JSON en un array
                        let favoritosSerie = JSON.parse(recuperoStorageDos)
                        console.log(favoritosSerie);

                        //Capturamos el contenedor del elemento a mostrar

                        let sectionSerie = document.querySelector(".contenedorArticulosFavoritosSeries");
                        let seriesFavoritas = ""
                        
                        //Si el storage está vacío indicamos al usuario que no hay favoritos seleccionados
                        
                        if(favoritosSerie == null || favoritosSerie.length == 0 ) {
                            favoritosSerie.innerText = "¡No hay favoritos seleccionados!"
                        
                        }
                        else{
                            //for para recorrer el array que tiene los favoritos
                            for (let i=0; i<favoritosSerie.length; i++){
                                buscarYMostrarFavoritosSeries(favoritosSerie[i])
                            }
                        }
                        
                        function buscarYMostrarFavoritosSeries(id){
                        
                            //Fetch para buscar cada elemento del Array
                                let urlSeries = `https://api.themoviedb.org/3/tv/${id}?api_key=4bcb2ca1395628db6221ba6939b8c9d7`
                            
                                fetch(urlSeries)
                                .then(function(response) {
                                    return response.json();
                                })
                                .then(function(data) {
                                    console.log(data);
                        
                                    seriesFavoritas += 
                                    `
                                    <article class="articulosIndex">
                                    <div class="contenedorImagen">
                                        <a href="detail-series.html?id=${data.id}">
                                            <img src= "https://image.tmdb.org/t/p/w342/${data.poster_path}" alt="">
                                        </a>
                                    </div>
                                    <h3>${data.original_name}</h3>
                                    <p>${data.first_air_date}</p>
                                </article>`;
                                    
                            
                                    sectionSerie.innerHTML = seriesFavoritas
                                })
                                .catch(function(error) {
                                    console.log("El error fue: " + error);
                                });
                            
                            }