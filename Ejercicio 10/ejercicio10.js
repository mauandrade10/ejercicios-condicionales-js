/*10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses*/

const form = document.querySelector('#form');
const selectPlan = document.querySelector('#select-plan');
const discount = document.querySelector('#discount');
const resultSection = document.querySelector('#result-section');
const resultDiscount = document.querySelector('#result-discount');

let total = 0;

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    deleteInfo();
    const result = document.createElement('p');
    const value = totalBill(selectPlan.value, discount.value);

    result.innerText = `The total which you have to pay for the ${selectPlan.value} is: $${value}`;

    resultSection.appendChild(result);
});

function totalBill(plan, promotion){
    
    const monthlyValue = document.createElement('p');
    if (plan == 'course'){
        total = 4999 * 2;
        monthlyValue.innerText = `The cost of each month is $4999`
    } 
    else if (plan == 'career'){
        total = 3999 * 6;
        monthlyValue.innerText = `The cost of each month is $3999`
    } 
    else{
        total = 2999*12;
        monthlyValue.innerText = `The cost of each month is $2999`
    } 
    resultSection.appendChild(monthlyValue);
    const valueDiscount = setDiscount(promotion.toLowerCase());

    return total * valueDiscount;
};

function setDiscount (value){
    const correctCode = document.createElement('p');
    if (value == 'facebook'){
        correctCode.innerText = 'The code is correct, you have 20% off';
        resultDiscount.append(correctCode);
        return 0.8;
    }else if (value == 'google'){
        correctCode.innerText = 'The code is correct, you have 15% off';
        resultDiscount.append(correctCode);
        return 0.85;
    }else if (value == 'jesua'){
        correctCode.innerText = 'The code is correct, you have 50% off';
        resultDiscount.append(correctCode);
        return 0.5;
    }else{
        correctCode.innerText = 'The code is incorrect, you do not have discount';
        resultDiscount.append(correctCode);
        return 1;
    }
}

function deleteInfo(){
    while(resultSection.firstChild){
        resultSection.removeChild(resultSection.firstChild);
    }

    while(resultDiscount.firstChild){
        resultDiscount.removeChild(resultDiscount.firstChild);
    }
};