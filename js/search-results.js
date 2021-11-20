


let queryStringBusqueda = location.search;
let queryStringObjectSearch = new URLSearchParams(queryStringBusqueda);
let query = queryStringObjectSearch.get("formularioDeBusqueda");
let urlSearchMovies = `
https://api.themoviedb.org/3/search/movie?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&query=${query}&page=1&include_adult=false`



let rutaImg = './img/default-image.jpg'

fetch(urlSearchMovies)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log('movies');
        console.log(data);

        let info = data.results 
        let contenedorSearchMovies = document.querySelector(".searchMovies")
        let searchString = ""

        for (let i = 0; i < info.length; i++) {
            if (info[i].poster_path != null) {
                rutaImg = `https://image.tmdb.org/t/p/w342/${info[i].poster_path}`
            }

            searchString += `
                <article class="articulosIndex">
                    <div class="contenedorImagen">
                        <a href="detail-movie.html?id=${info[i].id}">
                            <img src= "${rutaImg}" alt="">
                        </a>
                    </div>
                    <h3>${info[i].title}</h3>
                    <p>${info[i].release_date}</p>
                </article>`;
        }
        contenedorSearchMovies.innerHTML = searchString

    })

    .catch(function (error) {
        console.log(error)
    }
    )



let urlSearchTVS = `https://api.themoviedb.org/3/search/tv?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=1&query=${query}&include_adult=false`


fetch(urlSearchTVS)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log('series');
        console.log(data);

        let info = data.results 
        let contenedorSearchTVS = document.querySelector(".searchTVS")
        let searchStringTVS = ""

        for (i = 0; i < info.length; i++) {
            searchStringTVS += `
                <article class="articulosIndex">
                    <div class="contenedorImagen">
                        <a href="detail-series.html?id=${info[i].id}">
                            <img src= "https://image.tmdb.org/t/p/w342/${info[i].poster_path}" alt="">
                        </a>
                    </div>
                    <h3>${info[i].original_name}</h3>
                    <p>${info[i].first_air_date}</p>
                </article>`;
        }
        contenedorSearchTVS.innerHTML = searchStringTVS

    })

    .catch(function (error) {
        console.log(error)
    }
    )
