let skipCounter = 0


fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    
    let recetas = data.recipes;
    let comidas = "";
    let listaRecetas = document.querySelector(".lista_recetas");
    

    for (let i = 0; i <= 10; i++) {
      comidas += `
        <article>
          <img src="${recetas[i].image}" alt="${recetas[i].name}">
          <h2>${recetas[i].name}</h2>
          <p>Dificultad: ${recetas[i].difficulty}</p>
          <a href="./detalle.html?id=${recetas[i].id}">Ver detalle</a>
        </article>
      `;
    }

    console.log(comidas);
    listaRecetas.innerHTML  = comidas;

    let cargarMas = document.querySelector("#cargar-mas")
    let cargar = 10

    cargarMas.addEventListener("click", function () {
    let nuevasRecetas = ""
      for (let i = cargar; i < (cargar + 10); i++) {
        nuevasRecetas += `
                        <article class="articles-recetas">
                               <img src= ${recetas[i].image} alt=''>
                                <h2>Name: ${recetas[i].name} </h2>
                                <p>Difficulty: ${recetas[i].difficulty} </p>
                         </article>
                     `;
      }
    cargar += 10
    listaRecetas.innerHTML += nuevasRecetas
    });


  })
  .catch(function (error) {
    console.log("Error: ", error);
  });


