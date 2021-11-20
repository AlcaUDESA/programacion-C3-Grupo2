let queryStringSeries = location.search;
let queryStringObject = new URLSearchParams(queryStringSeries);
let id = queryStringObject.get("id");
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=4bcb2ca1395628db6221ba6939b8c9d7`;

fetch(url)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data);

    let titulo = document.querySelector(".tituloSerie");
    let imagen = document.querySelector(".imagenSerie");
    let subtitulo = document.querySelector(".subtitulosDetalles");
    let rating = document.querySelector(".ratingSerie");
    let fechaEstreno = document.querySelector(".fechaEstrenoSerie");
    let descripcionSerie = document.querySelector(".descripcionSerie");

    titulo.innerText = data.original_name;
    imagen.src = `https://image.tmdb.org/t/p/w342/${data.poster_path}`;
    subtitulo.innerText = data.original_name;
    rating.innerText = `Rating:${data.vote_average}`;
    fechaEstreno.innerText = `Fecha de estreno: ${data.first_air_date}`;
    descripcionSerie.innerText = data.overview;

    let generos = data.genres;
    let generoDetalle = document.querySelector(".genero");
    let generosLista = "";
    for (let i = 0; i < generos.length; i++) {
      generosLista += `<a class="anclajeGeneros" href="detail-genres.html?id=${generos[i].id}">${generos[i].name}</a>. `;
    }

    generoDetalle.innerHTML = generosLista;

    let favoritosSeries = [];

    let recuperoStorage = localStorage.getItem("favoritosSeries");

    if (recuperoStorage != null) {
      //primero queremos que sea una cadena de texto para guardarlo en favoritos

      favoritosSeries = JSON.parse(recuperoStorage);
    }

    //Al Hacer click en el link ...

    let favSeries = document.querySelector(".favSeries");

    //Chequear si está el ID en el array de Favoritos pertenenciente al eleegido

    if (favoritosSeries.includes(id)) {
      favSeries.innerText = "Quitar de Favoritos";
    }

    favSeries.addEventListener("click", function (evento) {
      evento.preventDefault();

      if (favoritosSeries.includes(id)) {
        let indice = favoritosSeries.indexOf(id);
        favoritosSeries.splice(indice, 1);
        favSeries.innerText = "Agregar a favoritos";
      } else {
        favoritosSeries.push(id);
        favSeries.innerText = "Quitar de favoritos";
      }

      let favSerieToString = JSON.stringify(favoritosSeries); //Transformamos el array en cadena de texto

      //Guardamos el array en el Storage
      localStorage.setItem("favoritosSeries", favSerieToString); //Guardamos array en el storage
    });
  })
  .catch(function (error) {
    console.log("El error fue: " + error);
  });
