//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

const form = document.querySelector('#form');
const firstNumber = document.getElementById('first-number');
const secondNumber = document.querySelector('#second-number');

form.addEventListener('submit', compareNumbers);

function compareNumbers(e){
    e.preventDefault();
    const result = document.createElement('p');
    if (Number(firstNumber.value) > Number(secondNumber.value)) result.innerText = `The number ${firstNumber.value} is higher than ${secondNumber.value}`
    else result.innerText = `The number ${secondNumber.value} is higher than ${firstNumber.value}`
    form.appendChild(result)
}