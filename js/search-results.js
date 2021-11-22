    //validacion del formulario//
    
    let formulario = document.querySelector(".buscadorHeader")
    let inputField = document.querySelector(".buscadorHeaderInput")
    let messageM = document.querySelector(".messageM")

    formulario.addEventListener("submit", function(evento){
        evento.preventDefault();
        console.log("No se ha enviado")

        if(inputField.value == ""){
            messageM.innerText = "No has ingresado ningun termino";
            messageM.style.texAlign = "center";
        } else if(inputField.value.length < 3) {
        messageM.innerText = "Debes ingresar al menos 3 caracteres"
        messageM.style.textAlign = "center"}
        else {
        this.Submit()
    }
    })



    //QUERY STRING//

    //Queremos lograr es que lo que el usuario escribió en el input de un formulario desde cualquier parte de nuestro sitio lo queremos capturar y lo queremos utilizar para mostrarle las coincidencias tanto de peliculas como de series que me trae el endpoint en cuestion de la API de TMDB//
    //Esa información del formulario se envía desde un formulario a traves de la peticion por GET.  Es un tipo de metodo de HTTP.

    //Desde Javascript aquello que el usuario ha escrito lo queremos tener guardado en una variable// Entonces la lógica es la siguiente:

    //Primero declaro una variable llamada QueryStringBusqueda que le asigno como valor la propiedad search a traves de la notacion de punto del objeto literal location. 

    //¿Que es un objeto literal? Es un tipo de dato de Javascript que contiene propiedades y contiene metodos es decir propiedades que reciben como valor una funcion


    //Primero declaro una variable llamada QueryStringBusqueda que le asigno como valor la propiedad search a traves de la notacion de punto del objeto literal location. 
    let queryStringBusqueda = location.search;

    //En este caso la propiedad Search permite almacenar la query String completa de una URL, es decir tanto la clave como el valor, y me la va a dar en formato de cadena de texto, osea string que es un tipo de dato


    //Lo que hago en esta linea de codigo es declarar otra variable de nombre QueryStringObjectSearch y la igualo a una herramiento llamada new URLSearchParams que es un objeto literal lleno de metodos y que nos va a permitir capturar el valor de una QueryString en especifico. Esta herramienta recibe como parametro lo que nos traia location.search
    let queryStringObjectSearch = new URLSearchParams(queryStringBusqueda);

    //Y entonces, lo que hago en la linea siguiente es declarar la variable de nombre Query y utilizar un metodo de New URLSearch Params que es get. 
    let query = queryStringObjectSearch.get("formularioDeBusqueda");
    //Get finalmente va a ser quien extraiga el valor de la query string que en este caso es lo que ingresó el usuario. Ej: Spiderman.  Get es uno de los metodos de URL Search Params



    //A continuacion declaro una variable llamada urlSearchMovies donde voy a estar guardando la ruta del endpoint de las películas de resultados de busqueda//
    //Y aquí es donde vamos a utilizar ese valor de la Query String que capturamos antes, porque, a través del uso de plantillas literales que permite mezclar mas de un tipo de dato de javascript, lo qeu hacemos es asignar un valor variable a la  clave query que va a estar precedido por nuestra variable que contiene lo que el usuario en cuestion//

    //¿Como vemos esto, bueno, hace falta hablar de Fetch, pero basicamente nos sirve para que, sin importar lo nos ponga el usuario, el endpoint cargue con el valor de lo que el usuario escribió y despues te muestre lo que encuentra//


    //USAMOS QUERY STRING PARA EL ENDPOINT//
    let urlSearchMovies = `
    https://api.themoviedb.org/3/search/movie?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&query=${query}&page=1&include_adult=false`



    let rutaImg = './img/default-image.jpg'

//UTILIZAMOS FETCH//


    //¿Pero para traer las peliculas como hago? Si ya tengo mi endpoint//

    //Utilizamos Fetch. Fetch es una funcion asincrona que nos sirve para consultar por un recurso de manera asincronica, en este caso por el endpoint y la informacion que trae sobre las peliculas que busquemos//

    //Fetch recibe como parametro nuestro endpoint//
    fetch(urlSearchMovies)
    //Y al ser una funcion asincronica tiene la caracteristica de devolver una promesa. Una promesa es como "una caja"/objeto llena de informacion que representa un valor que puede que este disponible ahora o en futuro

    //El primer metodo que podemos ver es .then
    //Then recibe como parametro una response/respuesta y lo que hacemos luego es que esa respuesta se transforme en un objeto literal gracias a un metodo llamado .json()
        .then(function (response) {
            return response.json()
        })

    //Pero como retorna una promesa y nos trae una respuesta en objeto literal tenemos que utilizar otra vez .then
    //Este then recibe como parametros los datos que viajaron del primero que estan en objeto literal y ese parametro se llama data por una cuestion de convencion de javascript
        .then(function (data) {
    //Al tener toda la data en un formato que entendemos ya podemos  hacer un console.log de la misma y eso es lo que hago
            console.log(data);

    //Luego declaro una varaible llamada info donde accede a la propiedad results de toda la informacion de data disponible porque es en results donde estan las peliculas que quiere mostrar  a mi pagina
            let info = data.results 

    //Y me doy cuenta de que results es un array con una cierta cantidad de peliculas

    //Entonces empieza mi logica en pos de poder construir articulos que se muestren en pantalla para el usuario donde esten todas esas peliculas

    //Para eso me doy cuenta de que tengo que crear un bucle, es decir un for. Que me va a servir para recorrer ese array.

    //Entonces lo primero que hago es, en esta linea donde declaro la variable ContenedorSearchMovies capturar esa parte de mi HTML donde quiero agregar esos articulos.

    //Y para eso lo que hago es utilizar querySelector, que es un selector de un solo elemento que reconoce los elementos como CSS y me los captura del DOM, por eso escribimos Document, porque document redpresenta nuestra interfaz de HTML virtual que entiende Javascript
            let contenedorSearchMovies = document.querySelector(".searchMovies")
    //Lo que captura es una clase llamada SearchMovies, y le agrego comillas. Y el punto como si estuviese trabajando en css
        
    //Luego declaro un string vacío en donde que lo voy a ir rellenando con cada vuelta de mi bucle, que en este caso depende del largo de mi data.results que es igual a decir la variable info.

    //Esto lo hago para que esté en formato de cadena texto y HTML me lo entienda, porque sino estaría en formato array.
            let searchString = ""


    //El for esta compuesto por una condicion inicial en donde declaro una variable llamada i que representa el indice que va a ir cambiando de mi array y en este caso empieza en 0. Luego lo que hago es escribir la condicion de corte para que el bucle sepa cuando terminar y por ultimo le escribo condicion del modificador, que en este caso por cada vuelta, le va a a sumar un numero a nuestra variable i



    //Lo primero que plantee fue que mi string vacio le tenía que poner += para que vaya sumando y respetando sin sobreescribir lo que va haciendo en cada vuelta y quiero que lo vaya guardando en mi stirng vacio

    //La estructura, la borre del html y ahora la utilizo dentro del for. Pero respeta las mismas clases, con la diferencia de que ahora el dato es dinamico, y dependiendo en que vuelta me encuentre me va a cargar otra informacion.

    //Esto lo podemos ver en el anclaje donde le agrego un signo de pregunta que abre paso a querystring y entonces le paso que dependiendo en que pelicula estes me cargues el id de esa pelicula para cuando la persona quiera ir al detalle puntual del articulo que se carga.

    //luego escribí una ruta para mi imagen, que luego voy a pasar hablar de eso pero le dejo una por default

    //Luego en las etiquetas h3 y p lo que hago es mas de lo mismo, acceder a las propiedades que quiero de info y que cargue dependiendo de la vuelta en la que se encuentra mi for y entonces va cambiando la pelicula y la informacion que contiene
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

    //Pero para que esto funcione y aparezca en mi DOM uso innerHTML. Lo que hago es usar InnerHTML para agregar el contenido al div de clase searchMovies y le voy a estar pasando todos estos articulos que guarde en mi string vacio
            contenedorSearchMovies.innerHTML = searchString

        })

    //Y nada, sobre mi condicional if es que si hay foto sucede todo esto. Y si no hay foto queda una por default, que es la que hace el bucle. Pero ponemos el condicional porque si llega a cumplirse que hay foto nosotros queremos que los articulos no tengan la ruta de una foto que ven aquí, sino la que ven aquí.
        .catch(function (error) {
            console.log(error)
        }
        )
    //Y despues tenes el catch, que es una funcion que recibe como parametro un error y basicamente la consologeamos para que nos muestre por pantalla los problemas que pueden darse en cualquier instancia de nuestro fetch.



    //Aca se repite la historia, lo mismo que en peliculas solo que cambiamos el nombre de las varias y cambiamos la ruta del ENDPOINT, pero mantenemos ese valor dinamico para la clave de query que es lo que el usuario va a estar ingresando.
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
                
                if (info[i].poster_path != null) {
                    rutaImg = `https://image.tmdb.org/t/p/w342/${info[i].poster_path}`
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
            contenedorSearchTVS.innerHTML = searchStringTVS

        })

        .catch(function (error) {
            console.log(error)
        }
        )


    //Como pueden ver esta es la logica que maneja Search-Results. Me faltó hablar de las resctricciones del buscador, como por ejemplo que si escribis 3 letras no te busca o si no pones nada te avisa. Pero el resto lo pudimos ir viendo.


    window.addEventListener("load",function(){
        let gifLoad = document.querySelector(".carga")
        gifLoad.style.display = "none"
    })