//Utilizamos la QueryString para poder hacer el detalle de cada película a partir del id que te brnda la URL
let queryStringPeliculas = location.search;
let queryStringObject = new URLSearchParams(queryStringPeliculas);
let id = queryStringObject.get("id");
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=4bcb2ca1395628db6221ba6939b8c9d7`;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    //Guardamos en una variable a los elementos que queremos capturar del DOM
    let titulo = document.querySelector(".tituloPelicula");
    let imagen = document.querySelector(".imagenPeli");
    let subtitulo = document.querySelector(".subtitulosDetalles");
    let rating = document.querySelector(".ratingPelicula");
    let fechaEstreno = document.querySelector(".fechaEstrenoPelicula");
    let descripcionPelicula = document.querySelector(".descripcionPelicula");

    //Como no hay array con las peliculas. Reemplazamos/Actualizamos la información de esos elementos capturados
    titulo.innerText = data.title;
    imagen.src = `https://image.tmdb.org/t/p/w342/${data.poster_path}`;
    subtitulo.innerText = data.title;
    rating.innerText = `Rating:${data.vote_average}`;
    fechaEstreno.innerText = `Fecha de estreno: ${data.release_date}`;
    descripcionPelicula.innerText = data.overview;

    //Generos del detalle//
    let generos = data.genres;
    let generoDetalle = document.querySelector(".genero");
    let generosLista = "";

    for (let i = 0; i < generos.length; i++) {
      generosLista += `<a class="anclajeGeneros" href="detail-genres.html?id=${generos[i].id}&nombre=${generos[i].name}">${generos[i].name}</a>. `;
    }

    generoDetalle.innerHTML = generosLista;

    // FAVORITOS DETALLE //

    //Creamos un array que iremos completando con datos//
    let favoritos = [];

    //Recuperamos storage
    let recuperoStorage = localStorage.getItem("favoritos");

    if (recuperoStorage != null) {
      //primero queremos que sea una cadena de texto para guardarlo en favoritos

      favoritos = JSON.parse(recuperoStorage);
    }

    //Al Hacer click en el link ...

    let fav = document.querySelector(".fav");

    //Chequear si está el ID en el array de Favoritos pertenenciente al eleegido

    if (favoritos.includes(id)) {
      fav.innerText = "Quitar de Favoritos";
    }

    fav.addEventListener("click", function (evento) {
      evento.preventDefault();

      if(favoritos.includes(id)){
          let indice = favoritos.indexOf(id);
          favoritos.splice(indice,1)
          fav.innerText = "Agregar a favoritos"
      }else{
          favoritos.push(id);
          fav.innerText = "Quitar de favoritos"
      }

      
      //Guardamos el array en el Storage
      let favToString = JSON.stringify(favoritos); //Transformamos el array en cadena de texto

      localStorage.setItem("favoritos", favToString); //Guardamos array en el storage

      console.log(localStorage);
    });
  })
  .catch(function (error) {
    console.log("El error fue: " + error);
  });
