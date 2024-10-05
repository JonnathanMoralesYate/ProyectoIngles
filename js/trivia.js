
//localStorage.clear();

//Funcion activar la pregunta siguiente y desactivar la anterior: 
function verPregunta(ind){
    const cuestionarios= document.querySelectorAll('.cuestionario');

    cuestionarios.forEach((cuestionario, i) =>{
        cuestionario.style.display = (i===ind) ? 'block' :'none';
               
    })    
}
//función para agregar uno al índice y activar preguntas: 
function siguientePregunta(){
    ind++;
    verPregunta(ind);
}

//Función para mostrar el formulario de preguntas -con onclick(): 
let tomar_test= document.getElementById('test_yourself');
tomar_test.addEventListener('click', function(){
    
    let elemento1=document.getElementById('cont_cuestionarios');       
    
    elemento1.className= 'cont_cuestionarios';
    localStorage.setItem('test', 'true'); 
    
    tomar_test.className='elemento_invisible';   
    ind=-1;
    
    siguientePregunta() ;
    
    
    
});
testRunnig();
//Programar los eventos al presionar el botón pregunta: 

let puntaje=[0,0,0,0,0];
let puntaje_total=0;


const elementos_pregunta= document.querySelectorAll('.formulario_preguntas');
elementos_pregunta.forEach((form, index)=>{
    form.addEventListener('submit', function(event){
        event.preventDefault();
        ind=index;       
        
        const seleccion = form.querySelector('input[type="radio"]:checked');
        
        if(seleccion){
            puntaje[index]= parseFloat(seleccion.value);                 
            puntaje_total+=puntaje[index];        
            siguientePregunta();  
    
        }else{
            alert("Choose an answer to continue.");
        }
            anunciarResultado(puntaje_total);
           
        })        

    })

    //Función para mantener el test corriendo sin interrupciones:
    function testRunnig(){
        const test_run=localStorage.getItem('test');
       
        let elemento1=document.getElementById('cont_cuestionarios');
        if(test_run==='true'){
            elemento1.className='cont_cuestionarios';
            tomar_test.className= 'elemento_invisible';

            window.addEventListener('beforeunload', function (event) {
                // Mensaje de advertencia (no siempre se mostrará el texto)
                const confirmationMessage = '¿Estás seguro de que deseas salir?';
            
                // Para mostrar el mensaje, necesitas establecer la propiedad returnValue
                event.returnValue = confirmationMessage; // Esto es necesario para algunos navegadores
            
                // Si quieres que aparezca el mensaje en navegadores antiguos, puedes hacer esto:
                return confirmationMessage; // Aunque la mayoría de los navegadores no lo mostrarán
            });
                     

        }else{
            elemento1.className='elemento_invisible';
            tomar_test.className= 'btn btn-outline-light text-dark fs-5 fw-bold';
        }
    }

    function cerrarTest(){
        
        localStorage.removeItem('test');
        location.reload();
       
    }
    //FUNCIÓN PARA ANUNCIAR EL RESULTADO: 
    
   function anunciarResultado(x){
        let mensaje_congratulations="";
        let score= document.getElementById('puntaje');
        let Congratulations=document.getElementById('congratulations');

    if(x>=8){
        mensaje_congratulations="Congratulations!! =)";
        Congratulations.className="masdeOcho";
        score.className="masdeOcho";
        
        
    }else if(x>= 6){
        mensaje_congratulations="It is no bad. =|";
        Congratulations.className="masdeSeis";
        score.className="masdeSeis";
    }else{
        mensaje_congratulations="You can do better. =(";
        Congratulations.className="menosdeSeis";
        score.className="menosdeSeis";
    }
    Congratulations.textContent= mensaje_congratulations;
    score.textContent="->  "+ puntaje_total;

   }