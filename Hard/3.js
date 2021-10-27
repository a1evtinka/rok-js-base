/*

  Создайте функцию, которая убирает из строки символ "_", а следующую за "_" букву делает заглавной

  Для начала пропиши аргументы функции.  

  Пример:  => 'elbrusBootcamp'

*/

const camelCase = (str) => {
  let string = '';
 let arr = str.split('_');
  arr[0] = arr[0].toLowerCase();
  for( let i = 1; i< arr.length;i++){
    
    arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1).toLowerCase();
    
  }
  string = arr.join('');
  return string;
}


module.exports = camelCase
