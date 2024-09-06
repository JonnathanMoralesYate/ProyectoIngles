
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
        if (data.status === "success") {
            messageElement.style.color = "green";
            messageElement.textContent = data.message;
        } else {
            messageElement.style.color = "red";
            messageElement.textContent = data.message;
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
        if (data.status === "success") {
            messageElement.style.color = "green";
            messageElement.textContent = "Bienvenido, el registro ha sido exitoso.";
        } else {
            messageElement.style.color = "red";
            messageElement.textContent = "El usuario y/o correo existentes. Intenta nuevamente";
        }
    })
    .catch(error => console.error('Error:', error));
});
