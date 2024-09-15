
// Función para cargar los comentarios

function cargarComentarios() {
    fetch('get_comments.php')
        .then(response => response.json())
        .then(data => {
            
            let comentariosTexto = '';

            // Iterar sobre los datos y formatear el texto
            data.forEach(comentario => {
                comentariosTexto += `<br><span style= "color:orange;">${comentario.autor}<br></span>`;  
                comentariosTexto += `${comentario.comentario}<br>`;
                comentariosTexto += `<span style="font-size: 10px;">Fecha: ${comentario.fecha}<br><button class="like-button" data-id="${comentario.id}">Like</button> ${comentario.likes} likes <br></span>`;
            });

            //comentariosTexto += `<span style="font-size: 10px;">Fecha: ${comentario.fecha}<br><button class="like-button" data-id="${comentario.id}">Like</button> ${comentario.likes} likes <br><br></span>`;
            
        

            // Mostrar comentarios en el textarea
            document.getElementById('comments').innerHTML = comentariosTexto;
            let liker= document.getElementById('autor').textContent;
            
           

          

            document.querySelectorAll('.like-button').forEach(button => {
                button.addEventListener('click', function() {
                    // Obtener el valor del atributo data-id del botón clickeado
                    const comentarioId = this.getAttribute(`data-id`);
              //    alert('Botón Like clickeado para comentario con ID:'+ comentarioId);
              //    paracoment.textContent= comentarioId;

              incrementarLike(comentarioId, liker)
              .then(()=>{
                //Actualizar el contador de likes en la interfaz
                const likeCountSpan=document.querySelector(`.like-count[data-id="${comentarioId}"]`);
                if(likeCountSpan){
                    likeCountSpan.textContent=parseInt(likeCountSpan.textContent)+1;
                }
              })
              .catch(error=> {
                alert('Hubo un problema al incrementar el like...en el js');
              })
                 

                });
            });
            
        })
        .catch(error => console.error('Error:', error));
}
// Cargar comentarios al cargar la página
window.onload = cargarComentarios;

//función para registrar comentarios
document.getElementById('RegistroComentarios').addEventListener('submit', function(event){
    event.preventDefault();

    const autor= document.getElementById('autor').textContent;
    const comentario= document.getElementById('comentario1').value;

    fetch('insertando.php', {
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'autor':autor,
            'comentario': comentario
        })
    })
    .then(response=>response.text())
    .then(result=>{
        alert('comentario agregado con éxito');
        
    })
    .catch(error => console.error('Error:', error));
});

//función para incrementar el númeo de likes:
function incrementarLike(comentarioId,liker) {
    return fetch('like.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: comentarioId, name:liker})
    })
    .then(response => response.json())
    .then(result=>{
        location.reload();
        alert('Acabas de dar like');
    })
    .catch(error => console.error('Error:', error));
    
}

function recargarComen(){
    location.reload();
}





