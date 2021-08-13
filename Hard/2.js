/*

Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

Для начала пропиши аргументы функции.  

Пример: [ 'one', 'two', 'three' ] => 'three'

*/
const longestString = (array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++){
    if (array.length == 0){
      console.log('null')
    } else {
      let length = array[i].length
      if (length > counter) {
        counter = length;
      }
    }
  }
  console.log(counter);
};


array = ['one', 'two', 'three', 'four', 'thousands', 'millions'];
longestString(array);
module.exports = longestString
