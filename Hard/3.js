/*

  Создайте функцию, которая убирает из строки символ "_", а следующую за "_" букву делает заглавной

  Для начала пропиши аргументы функции.  

  Пример: 'elbrus_bootcamp' => 'elbrusBootcamp'

*/

const camelCase = (string) => {
  let index = string.indexOf('_');
  let updatedString = string[index+1].toUpperCase();
  console.log(finalString);
}

camelCase('elbrus_bootcamp');
module.exports = camelCase
