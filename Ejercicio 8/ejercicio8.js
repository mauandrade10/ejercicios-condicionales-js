//8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

const number = document.querySelector('#input-number');
const button = document.querySelector('#button');
const resultSection = document.querySelector('#Result');

button.addEventListener('click', qualifyingTest);

function qualifyingTest(){
    const x = Number(number.value);
    const result = document.createElement('p');
    deleteInformation();

    if (x<1 || x>10) alert('The number is invalit, try again');
    else if (x<6) result.innerText = `You failed the exam, you should have studied more`;
    else if (x<8) result.innerText = `so-so`;
    else if (x<10) result.innerText = `Good job`;
    else result.innerText = `Excellent job`;

    resultSection.appendChild(result);
}


function deleteInformation(){
    while (resultSection.firstChild) {
        resultSection.removeChild(resultSection.firstChild);
      }
};