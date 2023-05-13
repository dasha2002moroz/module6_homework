function oddEven(){
    let num = +prompt('Введите число')
    ++num;
    if (typeof num === 'number' && !isNaN(num)) {
      if (num % 2 == 0) {
          console.log('Чётное число')
      }
      else {
          console.log('Нечётное число')
      }
    } else {
        console.log('Упс! Кажется, Вы ошиблись!')
    }
}
oddEven();
  