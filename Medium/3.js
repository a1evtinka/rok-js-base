/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/


const sumOfIntegers = (start, end) => {
  let array = [];
  let sum = 0;
  if (srart < end) {
    for (let i = end; i===start; i++){
      array.push(i)
    }
  } else {
    for (let i = start; i === end; i++) {
      array.push(i)
    }
  }
  //Суммируем свойства созданного/заполненного объекта array 
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
    return sum; 
  }
};

sumOfIntegers(10, 5);
module.exports = sumOfIntegers
