//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

const form = document.querySelector('#form');
const number = document.querySelector('#number');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const x = parseInt(number.value);
    const result = document.createElement('p');
    if(x%2==0) result.innerText = `${x} es divisible entre 2`;
    else result.innerText = `${x} no es divisible entre 2`
    form.appendChild(result)
})

