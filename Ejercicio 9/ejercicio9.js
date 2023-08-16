/*9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/


const form = document.querySelector('#form');
const select = document.querySelector('#select');
const resultSection = document.querySelector('#result-section');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const result = document.createElement('p');
    deleteInformation()

    if(select.value == 'no-topping') result.innerText = 'Your ice cream costs $50 MXN';
    else if (select.value == 'oreo') result.innerText = 'The oreo topping costs $10 MXN, so you have to pay: $60 MXN'; 
    else if (select.value == 'KitKat') result.innerText = 'The KitKat topping costs $15 MXN, so you have to pay: $65 MXN'; 
    else if (select.value == 'brownie') result.innerText = 'The brownie topping costs $20 MXN, so you have to pay: $70 MXN'; 
    else result.innerText = 'We are so sorry, we do not have this topping. Your ice cream costs $50 MXN';

    resultSection.append(result);
});

function deleteInformation(){
    while(resultSection.firstChild){
        resultSection.removeChild(resultSection.firstChild);
    };
};