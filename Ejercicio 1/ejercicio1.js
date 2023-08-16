//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

const form = document.querySelector('#form');
const select = document.querySelector('#select');

form.addEventListener('submit',(event)=>{
    if(select.value == 'Si'){
        alert('Ciertamente');
    }else alert('No te creo');
})