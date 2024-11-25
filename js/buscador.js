let queryString = location.search;
let objeto = new URLSearchParams( queryString)
let resultadoBuscador = objeto.get("buscador");
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
                        <p>Status:${platos[i].status} </p>
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



