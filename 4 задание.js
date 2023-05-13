const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
let i = a;
const intervalId = setInterval(function(a,b){ 
    console.log(i);
    if (i === 15) clearInterval(intervalId);
    i++;
}, 1000);