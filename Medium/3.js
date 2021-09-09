/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
  let sum = 0;
  if (start < end) {
    for (let i = start; i < end; i++) {
      sum += i;
    };
  } else if (start > end) {
    for (let n = end; n < start; n++) {
      sum += n;
    };
  };
  return console.log(sum);
}
module.exports = sumOfIntegers
sumOfIntegers(1, 10);


