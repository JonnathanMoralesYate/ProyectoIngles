
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
        const messageElement = document.getElementById("message");
        let casillas= document.querySelectorAll('.input_sign');
        if (data.status === "success") {
            messageElement.style.color = "green";
            messageElement.textContent = data.message;
        } else {
            messageElement.style.color = "red";
            messageElement.textContent = data.message;
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
