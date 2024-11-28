let correo = document.querySelector("#email");
let form = document.querySelector(".con");
let contra = document.querySelector("#password");

let erroresBool = false; 

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    erroresBool = false;

    
    if (correo.value.trim() === "") {
        alert("Completa el correo por favor");
        erroresBool = true; 
    }

   
    if (contra.value.trim() === "") {
        alert("Completa la contraseña por favor");
        erroresBool = true; 
    }

  
    if (!erroresBool) {
        this.submit(); 
    }
});