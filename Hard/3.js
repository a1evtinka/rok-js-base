/*

  Создайте функцию, которая убирает из строки символ "_", а следующую за "_" букву делает заглавной

  Для начала пропиши аргументы функции.  

  Пример: 'elbrus_bootcamp' => 'elbrusBootcamp'

*/


String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const camelCase = (string) => {
  let index = string.indexOf('_');
  let newString = string
  newString.replaceAt(index, 'XX');
  newString[index+1] = string[index+1].toUpperCase();
  return console.log(newString);
}

camelCase('elbrus_bootcamp');
module.exports = camelCase

