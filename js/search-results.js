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

//Capturamos QueryString
//En este caso la propiedad Search permite almacenar la query String completa de una URL, es decir tanto la clave como el valor, y me la va a dar en formato de cadena de texto, osea string que es un tipo de dato
let queryStringBusqueda = location.search;
//Lo que hago en esta linea de codigo es declarar otra variable de nombre QueryStringObjectSearch y la igualo a una herramiento llamada new URLSearchParams que es un objeto literal lleno de metodos y que nos va a permitir capturar el valor de una QueryString en especifico. Esta herramienta recibe como parametro lo que nos traia location.search
let queryStringObjectSearch = new URLSearchParams(queryStringBusqueda);
//Y entonces, lo que hago en la linea siguiente es declarar la variable de nombre Query y utilizar un metodo de New URLSearch Params que es get.
let query = queryStringObjectSearch.get("formularioDeBusqueda");
//Get finalmente va a ser quien extraiga el valor de la query string que en este caso es lo que ingresó el usuario. Ej: Spiderman.  Get es uno de los metodos de URL Search Params

//USAMOS QUERY STRING PARA EL ENDPOINT//
let urlSearchMovies = `https://api.themoviedb.org/3/search/movie?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&query=${query}&page=1&include_adult=false`;
let rutaImg = "./img/default-image.jpg";

//UTILIZAMOS FETCH//
//Fetch recibe como parametro nuestro endpoint//
fetch(urlSearchMovies)

  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data);
    let info = data.results;
    let contenedorSearchMovies = document.querySelector(".searchMovies");
    let searchString = "";

    for (let i = 0; i < info.length; i++) {
      if (info[i].poster_path != null) {
        rutaImg = `https://image.tmdb.org/t/p/w342/${info[i].poster_path}`;
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

    contenedorSearchMovies.innerHTML = searchString;
  })

  .catch(function (error) {
    console.log(error);
  });



// lo mismo que en peliculas solo que cambiamos el nombre de las variables y cambiamos la ruta del ENDPOINT, pero mantenemos ese valor dinamico para la clave de query que es lo que el usuario va a estar ingresando.
    let urlSearchTVS = `https://api.themoviedb.org/3/search/tv?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=1&query=${query}&include_adult=false`;

    fetch(urlSearchTVS)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log("series");
        console.log(data);

        let info = data.results;
        let contenedorSearchTVS = document.querySelector(".searchTVS");
        let searchStringTVS = "";

        for (i = 0; i < info.length; i++) {
        if (info[i].poster_path != null) {
            rutaImg = `https://image.tmdb.org/t/p/w342/${info[i].poster_path}`;
        }

        searchStringTVS += `
                        <article class="articulosIndex">
                            <div class="contenedorImagen">
                                <a href="detail-series.html?id=${info[i].id}">
                                    <img src= "https://image.tmdb.org/t/p/w342/${rutaImg}" alt="">
                                </a>
                            </div>
                            <h3>${info[i].original_name}</h3>
                            <p>${info[i].first_air_date}</p>
                        </article>`;
        }
        contenedorSearchTVS.innerHTML = searchStringTVS;
    })

    .catch(function (error) {
        console.log(error);
    });

//Si no carga o mientras carga la informacion que te trae el fetch a través del recurso endpoint hacemos un evento para mostrar un gif de carga//
    window.addEventListener("load", function () {
    let gifLoad = document.querySelector(".carga");
    gifLoad.style.display = "none";
    });
