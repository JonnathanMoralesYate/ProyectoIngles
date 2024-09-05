//Función para el botón sign up : Muestra el formulario de registro.

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("registro").addEventListener('click', function() {
        
        var elemento = document.getElementById("sign_up");

        if (elemento.style.display === "none" || elemento.style.display === "") {
            elemento.style.display = "block"; // Muestra el elemento
        } else {
            elemento.style.display = "none"; // Oculta el elemento si ya está visible
        }
        
    });
});

//Función para el botón cerrar (X) : Cierra el formulario de registro.
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('cerrar').addEventListener('click', function(){
        let elemento= document.getElementById('sign_up');
        elemento.style.display='none';
    })


})