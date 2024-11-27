let queryString = location.search;
let queryStringOBJ = new URLSearchParams(queryString);
let id = queryStringOBJ.get("id");
let url = `https://dummyjson.com/recipes/${id}`;
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        let comidas = data.recipe;
        let imagen = document.querySelector(".foto_receta");
        let nombre = document.querySelector(".nombre_receta");
        let instruccion = document.querySelector(".instrucciones_receta");
        let tiempo = document.querySelector(".tiempo_coccion");

        nombre.innerText = `nombre_receta: ${comidas.name}`;
        instruccion.innerText = `instrucciones_de_la_receta: ${comidas.instructions}`;
        tiempo.innerText = `tiempo_de_coccion: ${comidas.cookTimeMinutes}`;
        imagen.src = comidas.image;

        console.log(comidas.name);
        console.log(comidas.instruction);
        console.log(comidas.cookTimeMinutes);
        console.log(comidas.image);



    })
    .catch(function (error) {
        console.log("error: ", error);
    });