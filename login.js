
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
        let formularioInicio=document.getElementById('login_form');
        const messageElement = document.getElementById("message");
        let casillas= document.querySelectorAll('.input_sign');
        let welcom= document.getElementById('Bienvenida');
        let coment= document.getElementById('comentarios');
        let log_out=document.getElementById('log_out');
        let login= document.getElementById('login_inic');
        let register= document.getElementById('registro');

        if (data.status === "success") {

            login.style.display="none";
            register.style.display="none";
            coment.style.display="block";
            log_out.style.display= "block";
            welcom.innerHTML = `Hello <span style="color: #ff9b62;">${data.nombre}</span>. Welcome to How much do you know about PANELA!!`;
            welcom.style.fontWeight="bold";
            welcom.style.color="#7dcea0";
            welcom.style.backgroundColor="white";
            welcom.style.borderRadius="4px";
           formularioInicio.style.display="none";
        } else {
            messageElement.style.color = "red";
            messageElement.textContent = data.message;
            messageElement.style.backgroundColor="#d6eacc";
            messageElement.style.fontWeight="bold";
            messageElement.style.fontStyle="italic";
        }
        for(let i=0; i< casillas.length; i++){
            casillas[i].value="";
        }
    })
    .catch(error => console.error('Error:', error));
});

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
