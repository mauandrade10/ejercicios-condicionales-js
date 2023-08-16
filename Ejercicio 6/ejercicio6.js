//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

const form = document.querySelector('#form');
const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
const thirdNumber = document.querySelector('#thirdNumber');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const result = document.createElement('p');
    const highest = findHigherNumber(Number(firstNumber.value),Number(secondNumber.value),Number(thirdNumber.value));
    
    if (highest == 0){
        
        const x = Number(firstNumber.value);
        const y = Number(secondNumber.value); 
        const z = Number(thirdNumber.value);

        if(x==y && z==y){
            result.innerText = `The three numbers are the same, and they are the highest: ${x}`;
        }    
        else if(x==y){
            result.innerText = `The first number: ${x} and the second one: ${y} are the same, and they are the highest`;
        } 
        else if(z==y){
            result.innerText = `The second number: ${y} and the third one: ${z} are the same, and they are the highest`;
        } 
        else {
            result.innerText = `The first number: ${x} and the third one: ${z} are the same, and they are the highest`;
        }
    }else result.innerText = `${highest} is the highest number`;

    form.appendChild(result);
})


function findHigherNumber(x,y,z){

    const result = document.createElement('p');
    if(x > y && x > z) return x;
    else if (y > x && y > z)return y;
    else if (z > x && z > y)return z;
    else return 0;
}   