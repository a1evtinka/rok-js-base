/*

Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

Для начала пропиши аргументы функции.  

Пример: [ 'one', 'two', 'three' ] => 'three'

*/

const longestString = (arr) => {
  
  if (arr.length === 0) {
    return  null; 
    
  } else if (arr.length !== 0){

    let maxLength = arr[0];

      for( let i = 0; i < arr.length; i++){
          if( maxLength.length < arr[i].length){
            maxLength = arr[i];
           } 
          }
    return maxLength;
  } 
};

module.exports = longestString
