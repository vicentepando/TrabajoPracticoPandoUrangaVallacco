let queryString = location.search;
let queryStringOBJ = new URLSearchParams(queryString);
let id = queryStringOBJ.get("id");


fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let comidas = data.recipe;
        let imagen = document.querySelector(".foto_receta");
        let nombre = document.querySelector(".nombre_receta");
        let instruccion = document.querySelector(".instrucciones_receta");
        let tiempo = document.querySelector(".tiempo_coccion");

        nombre.innerText += data.name;
        instruccion.innerText += data.instructions;
        tiempo.innerText += data.cookTimeMinutes;
        imagen.src = data.image;


    })
    .catch(function (error) {
        console.log("error: ", error);
    });




