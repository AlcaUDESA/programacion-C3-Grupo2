//Peliculas Populares//
let urlPopularMovies =
  "https://api.themoviedb.org/3/movie/popular?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=1";

fetch(urlPopularMovies)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let info = data.results;

    let pelisPopulares = document.querySelector(
      ".contenedorArticulosPeliculas"
    );
    let pelisPopularesLista = "";

    for (i = 0; i < 5; i++) {
      pelisPopularesLista += `
                <article class="articulosIndex">
                    <div class="contenedorImagen">
                        <a href="detail-movie.html?id=${info[i].id}">
                            <img src= "https://image.tmdb.org/t/p/w342/${info[i].poster_path}" alt="">
                        </a>
                    </div>
                    <h3>${info[i].title}</h3>
                    <p>${info[i].release_date}</p>
                </article>`;
    }
    pelisPopulares.innerHTML = pelisPopularesLista;
  })
  .catch(function (error) {
    console.log("El error fue: " + error);
  });

//Series Populares//

let urlPopularSeries =
  "https://api.themoviedb.org/3/tv/popular?api_key=4bcb2ca1395628db6221ba6939b8c9d7";

fetch(urlPopularSeries)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let info = data.results;

    let seriesPopulares = document.querySelector(
      ".contenedorArticulosSeriesPopulares"
    );
    let seriesPopularesLista = "";

    for (i = 0; i < 5; i++) {
      seriesPopularesLista += `<article class="articulosIndex">
                <div class="contenedorImagen">
                    <a href="detail-series.html?id=${info[i].id}">
                        <img src= "https://image.tmdb.org/t/p/w342/${info[i].poster_path}" alt="">
                    </a>
                </div>
                <h3>${info[i].original_name}</h3>
                <p>${info[i].first_air_date}</p>
            </article>`;
    }
    seriesPopulares.innerHTML = seriesPopularesLista;
  })
  .catch(function (error) {
    console.log("El error fue: " + error);
  });

//Peliculas Mas Valoradas//

let urlTopRatedMovies =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=4bcb2ca1395628db6221ba6939b8c9d7";

fetch(urlTopRatedMovies)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let info = data.results;

    let pelisTop = document.querySelector(".contenedorArticulosPelisTop");
    let pelisTopLista = "";

    for (i = 0; i < 5; i++) {
      pelisTopLista += `<article class="articulosIndex">
                <div class="contenedorImagen">
                    <a href="detail-movie.html?id=${info[i].id}">
                        <img src= "https://image.tmdb.org/t/p/w342/${info[i].poster_path}" alt="">
                    </a>
                </div>
                <h3>${info[i].title}</h3>
                <p>${info[i].release_date}</p>
            </article>`;
    }
    pelisTop.innerHTML = pelisTopLista;
  })
  .catch(function (error) {
    console.log("El error fue: " + error);
  });