
let queryString = location.search;
let queryStringOBJ = new URLSearchParams(queryString);
let id = queryStringOBJ.get("categoria");


let url = 'https://dummyjson.com/recipes'; 
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        let recetas = data.recipes; 
        let contenedorRecetas = document.querySelector(".recetas_categorias");
        
        let recetasFiltradas = recetas.filter(receta => 
            receta.categories.includes(categoriaSeleccionada)
        );


        document.querySelector(".nombre_categorias").innerText = `Recetas de la categoría: ${categoriaSeleccionada}`;


        if (recetasFiltradas.length === 0) {
            let mensajeSinRecetas = document.createElement("p");
            mensajeSinRecetas.textContent = "No se encontraron recetas en esta categoría.";
            contenedorRecetas.appendChild(mensajeSinRecetas);
        }

        recetasFiltradas.forEach(receta => {
            let divReceta = document.createElement("div");
            divReceta.classList.add("receta");
            
            divReceta.innerHTML = `
                <h2>${receta.name}</h2>
                <img src="${receta.image}" alt="${receta.name}" />
                <p>Nivel de dificultad: ${receta.difficulty}</p>
                <a href="receta.html?id=${receta.id}">Ver detalle</a>
            `;

            contenedorRecetas.appendChild(divReceta); 
        });
    })
    .catch(function (error) {
        console.log("error: ", error);
    });