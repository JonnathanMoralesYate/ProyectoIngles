
//Insertando comentario de inicio de sesión :

document.getElementById("login_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const formData = new FormData(this);

    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
               
        
        let casillas= document.querySelectorAll('.input_sign');
        let formularioInicio=document.getElementById('login_form');
        const elemento = document.getElementById("message");
        
       
        if (data.status === "success") {
       
            const nombreUsuario=data.nombre;
            localStorage.setItem('sesionIniciada','true');
            localStorage.setItem('elUser', nombreUsuario );
            location.reload();
            

         
            
               
        } else {

    formularioInicio.style.display="block";    
    elemento.textContent = data.message;
    elemento.style.color = "red";
    elemento.style.backgroundColor="#d6eacc";
    elemento.style.fontWeight="bold";
    elemento.style.fontStyle="italic";

       }

        for(let i=0; i< casillas.length; i++){
            casillas[i].value="";
        }
       
    })
    
    .catch(error => console.error('Error:', error));
    
});
configInicio();


//función para inicio de sesion exitosa:
function inicioSucces(){
    let formularioInicio=document.getElementById('login_form');
    formularioInicio.style.display="none";

}
//función inicio fallido:
function inicioFailed(){
    
}
//función que configura la sesión iniciada:
function configInicio(){     
    let usuario_actual=document.getElementById('autor');
    let welcom= document.getElementById('Bienvenida');
    let coment= document.getElementById('comentarios');
    let log_out=document.getElementById('log_out');
    let login= document.getElementById('login_inic');
    let register= document.getElementById('registro');
    const sesionIniciada= localStorage.getItem('sesionIniciada');
    const nombreU= localStorage.getItem('elUser'); 
    let vercomentarios= document.getElementById('contenedor_comentarios');

   
    if(sesionIniciada==='true'){

        vercomentarios.style.display="block";
        usuario_actual.textContent=nombreU;
        login.style.display="none";
        register.style.display="none";
        coment.style.display="block";
        log_out.style.display= "block";
        welcom.innerHTML = `Hello <span style="color: red;">${nombreU}</span>, Welcome to how much do you know about PANELA!!`;
        welcom.style.fontWeight="bold";
        welcom.style.color="#7dcea0";
        welcom.style.backgroundColor="white";
        welcom.style.borderRadius="4px";  

    }else{
        vercomentarios.style.display="none";
        login.style.display="block";
        register.style.display="block";
        coment.style.display="none";
        log_out.style.display= "none";
        welcom.style.display="none";
    }   
    
}

//Insertando comentario de registro exitoso o usuario ya ha sido registrado.
document.getElementById("sign_up").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const formData = new FormData(this);

    fetch('registroUno.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById("messageReg");
        let casillas=document.querySelectorAll('.input_sign');
        if (data.status === "success") {
            messageElement.style.color = "green";
            messageElement.textContent = data.mensaje;
            
        } else {
            messageElement.style.color = "red";
            messageElement.textContent = data.mensaje;
        }
        for(let i=0; i<=casillas.length; i++){
            casillas[i].value="";
        }
    })
    .catch(error => console.error('Error:', error));
});

//Función para cerrar sesión:
function cerrarSesion() {
    fetch('logout.php')
    .then(response => response.text())
    .then(result => {
        if (result === 'success') {
            localStorage.removeItem('sesionIniciada');
            configInicio();
        }
    });
}
window.addEventListener('load', function() {
    if (sessionStorage.getItem('loginSuccess') === 'true') {
        sessionStorage.removeItem('loginSuccess'); // Limpiar el indicador
        // Aquí puedes realizar cualquier inicialización necesaria para la página después del login exitoso
    }
});

/*Métodos de 'localStorage':
    1.- setItem(key,value): Almacena un valor bajo una clave.
        Ej: localStorage.setItem(sesionIniciada, true);
        Ej: localStotage.setItem('nombre', 'Carlos');
    2.- getItem(key) : Recupera el valor almacenado bajo una clave.
            Ej: const nombre= localStorage.getItem('sesionIniciada'); //true
    3.- removeItem(key) : elimina el ítem bajo una clave.
            Ej: localStorage.removeItem('nombre');
    4.- key(index): recupera la clave del ítem en una posición específica.

    5.- length: propiedad que devuelve el número total de ítems almacenados.
            Ej: console.log(localStorage.length); // 1
    6.- clear(): elimina todos los ítems del almacenamiento local.
            Ej: localStorage.clear();
    
*/
