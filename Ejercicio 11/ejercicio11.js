/*11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */


const form = document.querySelector('#form');
const select = document.querySelector('#select');
const kilometer = document.querySelector('#kilometer');

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    const result = document.createElement('p');
    const totalPago = calcularPago(Number(kilometer.value), select.value);
    result.innerText= `El precio a pagar es $${totalPago.toFixed(2)}`;
    form.append(result);
});

function calcularPago(kilometros, vehiculo){
    let total = 0;
    let adicional = 0;
    if(vehiculo == 'coche') total = kilometros * 0.2;
    else if(vehiculo == 'moto')total = kilometros * 0.1;
    else total = kilometros * 0.5;

    adicional = valorAdicional(kilometros);

    return total + adicional;
}


function valorAdicional(km){
    if (km > 100) return 10;
    else return 5;
}