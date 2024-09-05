document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("registro", "cerrar").addEventListener('click', function() {
        
        var elemento = document.getElementById("sign_up");

        if (elemento.style.display === "none" || elemento.style.display === "") {
            elemento.style.display = "block"; // Muestra el elemento
        } else {
            elemento.style.display = "none"; // Oculta el elemento si ya está visible
        }
        
    });
});


