let categoriasContainer = document.querySelector(".recetas_categorias"); 

fetch('https://dummyjson.com/recipes/tags')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data); 
    for (let i = 0; i < data.length; i++) {
        categoriasContainer.innerHTML += `
            <div class="categorias-item">
                <h2>${data[i]}</h2>
                <a href="detalle_categorias.html?category=${data[i]}" class="view-recipes">Ver recetas</a>
            </div>
        `;
    }
})
.catch(function (error) {
    console.log('Error al cargar las categorías:', error);
});