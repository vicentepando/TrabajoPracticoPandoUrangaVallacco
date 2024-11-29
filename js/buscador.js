let queryString = location.search;
let objeto = new URLSearchParams( queryString)
let resultadoBuscador = objeto.get("buscador");

console.log(objeto)
console.log(resultadoBuscador);

let url =  `https://dummyjson.com/recipes/search?q=${resultadoBuscador}`;
let comida_buscador = document.querySelector(".buscador_comidas");
if(resultadoBuscador){
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        let platos = data.recipes;
        let lista_platos = "";
        let platos_buscador = document.querySelector(".buscador_comidas");
        for (let i = 0; i < platos.length; i++){
            lista_platos += `
                 <article>
                       <img src= ${platos[i].image} alt=''>
                        <p> <a href="./detalle.html?id=${platos[i].id}"> Name: ${platos[i].name} </a> </p>
                 </article> 
            `;
        }
        platos_buscador.innerHTML = lista_platos;

    })
    .catch(function (error) {
        console.log("error: ", error);
    });
}else{
    platos_buscador.innerHTML = `no se encontro la busqueda`;
}

const busqueda = document.querySelector('.b');
const invalidFeedback = document.querySelector('.invalido');
const formulario = document.querySelector('.main-buscador');

formulario.addEventListener('submit', function (event) {
  const valorBusqueda = busqueda.value;
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
    invalidFeedback.style.display = 'none';
  }
});