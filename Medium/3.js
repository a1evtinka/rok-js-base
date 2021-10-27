/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
  let sum = 0;
  
  if( start > end){
    for( let i = end; i <= start; i++){
      sum = sum + i;
    }
  } else if( end > start || end == start){
    for(let j = start; j <= end; j++) {
      sum = sum + j;
    }

  }
  
  return sum;
};

module.exports = sumOfIntegers;
