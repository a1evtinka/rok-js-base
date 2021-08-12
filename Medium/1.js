/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
  for (var i = 0; i < str.length; ++i) {
    console.log(str[i]);
  }
};

logEachLetter('ABVADASDASDAS');
module.exports = logEachLetter;
