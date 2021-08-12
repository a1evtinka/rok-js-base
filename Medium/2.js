/*

Создайте функцию, которая возвращает массив из 10 случайных целых чисел от 0 до 10.

Пример: () => [ 0, 1, 2, 2, 7, 4, 3, 2, 6, 3 ]

*/

array = [];
const randomArr = () => {
  for (let i = 0; i<10; i++) {
    let newNumber = Math.floor(Math.random() * 10);
    array.push(newNumber);
  }
  console.log(array);
};

randomArr();
module.exports = randomArr
