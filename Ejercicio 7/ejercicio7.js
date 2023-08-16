//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

const day = prompt('Enter a day of the week').toLowerCase();
if(day == 'monday') alert('Happy New Week');
else if (day == 'friday') alert('Happy New Weekend');
else if (day == 'saturday') alert('at last! It is saturday');
else if (day == 'sunday') alert('Time to relax, enjoy your sunday');
else alert('you have to work! :(');