let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('q'); 

let resultado = document.querySelector('.result');
let resultTitle = document.querySelector('.result-title');
let allRecipes = [];

fetch(`https://dummyjson.com/recipes/search?q=${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    allRecipes = data.recipes; 

    if (!allRecipes || allRecipes.length === 0) {
      resultado.innerHTML += "<p>No se encontraron coincidencias.</p>";
      return;
    }

    for (let i = 0; i < allRecipes.length; i++) {
      let recipe = allRecipes[i]; 
      let recipeMarkup = `
        <article>
          <img class="img-r" src="${recipe.image}" alt="${recipe.name}">
          <p><b>${recipe.name}</b></p>
          <p>Nivel de dificultad: ${recipe.difficulty}</p>
          <a href="receta.html?id=${recipe.id}">Ir al detalle</a>
        </article>`;
      resultado.innerHTML += recipeMarkup;
    }
    
  })
  .catch(function (error) {
    console.error("Error: " + error);
    resultado.innerHTML = "<p>Hubo un error al cargar los resultados. Por favor, intenta nuevamente.</p>";
  });

let busqueda = document.querySelector('.b');
let invalidFeedback = document.querySelector('.invalid-feedback');
let formulario = document.querySelector('.buscador');

formulario.addEventListener('submit', function (event) {
  let valorBusqueda = busqueda.value;
  let mensajeError = '';

  if (busqueda.value === '') {
    mensajeError = 'No completaste el campo de búsqueda';
  } else if (busqueda.value.length < 3) {
    mensajeError = 'Debes completar al menos 3 caracteres';
  }

  if (mensajeError) {
    event.preventDefault();
    invalidFeedback.innerHTML = mensajeError;
    invalidFeedback.style.display = 'block';
  } else {
    invalidFeedback.style.display = 'none';
  }
});