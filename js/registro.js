//Función para el botón sign up : Muestra el formulario de registro.

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("registro").addEventListener('click', function() {
        
        var elemento = document.getElementById("sign_up");
        var elemento2 =document.getElementById('login_form');

        if (elemento.style.display === "none" || elemento.style.display === "") {
            elemento.style.display = "block"; // Muestra el elemento
            elemento2.style.display='none';

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
    });


});
//Función pare el botón Login: Muestra el formulario de inicio: 

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("login_inic").addEventListener('click', function() {
        
        var elemento = document.getElementById("login_form");
        var elemento2= document.getElementById('sign_up');

        if (elemento.style.display === "none" || elemento.style.display === "") {
            elemento.style.display = "block"; // Muestra el elemento
            elemento2.style.display='none';
        } else {
            elemento.style.display = "none"; // Oculta el elemento si ya está visible
        }
        
    });
});
//Función para el botón cerrarL (X) : Cierra el formulario de inicio de sesión.
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('cerrarL').addEventListener('click', function(){
        let elemento= document.getElementById('login_form');
        
        elemento.style.display='none';        
    });
});

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('comentarios').addEventListener('click', function(){
        var elemento1= document.getElementById('contenedor_comentarios');
        var elemento2= document.getElementById('comentario1');
        var elemento3= document.getElementById('comentario2');
        var botComent= document.getElementById('comentarios');
       
        const sesionIniciada= localStorage.getItem('sesionIniciada');
        if((elemento2.style.display==="none" || elemento2.style.display==="")& sesionIniciada==='true'){
            elemento2.style.display="block"; //muestra la ventana de comentarios
            elemento3.style.display="block";
        }else{
            elemento2.style.display="none"; //oculta la ventana de comentarios.
            elemento3.style.display="none";
        }
        if(elemento1.style.display==='none'||elemento1.style.display===""){
            elemento1.style.display='block';
            botComent.textContent="Hide Comments";
        
        }else{
            elemento1.style.display='none';
            botComent.textContent="Show Comments";
           
        }
      
    })
})
function recargarComen(){
    location.reload();
}