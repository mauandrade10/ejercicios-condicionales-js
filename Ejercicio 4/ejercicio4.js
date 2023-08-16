//4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

const form = document.querySelector('#form');
const number = document.querySelector('#number');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const result = document.createElement('H1');
    if(number.value === '1000'){
        result.innerText = '¡¡¡¡¡¡You won an award!!!!!!';
        form.appendChild(result);
    } 
    else alert('We are sorry, try again')

});
