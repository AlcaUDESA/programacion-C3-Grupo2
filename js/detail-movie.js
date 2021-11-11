//Utilizamos la QueryString para poder hacer el detalle de cada película a partir del id que te brnda la URL
let queryStringPeliculas = location.search;
let queryStringObject = new URLSearchParams(queryStringPeliculas);
let id = queryStringObject.get("id");
let url =`https://api.themoviedb.org/3/movie/${id}?api_key=4bcb2ca1395628db6221ba6939b8c9d7`;


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





    //Como no hay array. Reemplazamos/Actualizamos la información de esos elementos capturados
        titulo.innerText = data.title;
        imagen.src = `https://image.tmdb.org/t/p/w342/${data.poster_path}`;
        subtitulo.innerText = data.title;
        rating.innerText = `Rating:${data.vote_average}`;
        fechaEstreno.innerText = `Fecha de estreno: ${data.release_date}`;
        descripcionPelicula.innerText = data.overview;
    })
    .catch(function (error) {
        console.log("El error fue: " + error);
    });
