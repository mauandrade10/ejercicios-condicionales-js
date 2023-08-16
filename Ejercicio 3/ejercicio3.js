//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

const number = prompt('Enter a whole number');

if(parseInt(number)%2==0) alert(`The number ${number} is even`)
else alert(`The number ${number} is odd`)