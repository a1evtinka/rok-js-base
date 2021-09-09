/*

Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

Для начала пропиши аргументы функции.  

Пример: [ 'one', 'two', 'three' ] => 'three'

*/
const longestString = (array) => {
  let counter = 0;
  let word;
  if (array.length == 0) {
    console.log('null') 
  } else {
    for (let i = 0; i < array.length; i++) {
      let length = array[i].length
      if (length > counter) {
        counter = length;
        word = array[i];
      };
    };
  };
  return console.log(word);
}
array = ['one', 'two', 'three', 'four', 'thousands', 'millions', 'ilovejustinbieber'];
longestString(array);
module.exports = longestString
