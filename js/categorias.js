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
                <h2><a class="view-recipes" href="category.html?category=${data[i]}">${data[i]}</a></h2>
        
            </div>
        `;
    }
})
.catch(function (error) {
    console.log('Error al cargar las categorías:', error);
});