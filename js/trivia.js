let ind=0;
//localStorage.clear();

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); // Obtener la clave
    const value = localStorage.getItem(key); // Obtener el valor
    alert(`Clave: ${key}, Valor: ${value}`); // Mostrar en un alert
}


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
    ind=-1;
    tomar_test.className='elemento_invisible';    
    testRunnig();
    
});
testRunnig();
//Programar los eventos al presionar el botón pregunta: 

let puntaje=[0,0,0,0,0];
let puntaje_total=0;
let score= document.getElementById('puntaje');

const elementos_pregunta= document.querySelectorAll('.formulario_preguntas');
elementos_pregunta.forEach((form, index)=>{
    form.addEventListener('submit', function(event){
        event.preventDefault();
        ind=index;       
        
        const seleccion = form.querySelector('input[type="radio"]:checked');
        
        if(seleccion){
            puntaje[index]= parseFloat(seleccion.value); 
            localStorage.removeItem(`test_${index-1}`);
            localStorage.setItem(`test_${index}`, index);                      
            puntaje_total+=puntaje[index];        
            siguientePregunta();
            alert(ind);
           
            
        }else{
            alert("Choose an answer to continue.")
        }
        
            score.textContent="-->   "+ puntaje_total;
        })        

    })

    //Función para mantener el test corriendo sin interrupciones:
    function testRunnig(){
        const test_run=localStorage.getItem('test');
       
        let elemento1=document.getElementById('cont_cuestionarios');
        if(test_run==='true'){
            elemento1.className='cont_cuestionarios';
            tomar_test.className= 'elemento_invisible';
            
                     
            siguientePregunta();   
        }else{
            elemento1.className='elemento_invisible';
            tomar_test.className= 'btn btn-outline-light text-dark fs-5 fw-bold';
        }
    }

    function cerrarTest(){
        localStorage.removeItem('test_4');
        localStorage.removeItem('test');
        location.reload();
    }




