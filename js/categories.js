let url = 'https://dummyjson.com/recipes';
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        let recetas = data.recipes; 
        let categoriasAgrupadas = {};
        for(let i = 0; i < recetas.length; i++ ){
            let receta = recetas[i]; 

            for (let j = 0; j < receta.categories.length; j++) {
                let categoria = receta.categories[j]; 
                    if (!categoriasAgrupadas[categoria]) {
                    categoriasAgrupadas[categoria] = [];
                }
                categoriasAgrupadas[categoria].push(receta);
            }
        }
        // ESTO DE ACA ABAJO ME LO MOSTRO CHAT: LE PREGUNTE QUE TENIA MAL SIN ESTO Y ME DIJO QUE ME FALTABA ESTO
        let listaCategorias = document.querySelector(".lista_categorias");
        for (let categoria in categoriasAgrupadas) {
            let li = document.createElement("li");
            li.innerText = categoria;
            li.addEventListener("click", function() {
                window.location.href = `category.html?categoria=${encodeURIComponent(categoria)}`;
            });
            listaCategorias.appendChild(li); 
        }
        
    
        console.log(categoriasAgrupadas); 
    })
    .catch(function (error) {
        console.log("error: ", error);
    });

