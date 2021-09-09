/*

Создайте функцию, которая принимает в качестве аргументов массив из слов, а возвращает созданное из этих слов предложение.  
Пример: ['I', 'am', 'groot'] => 'I am groot'

*/

arr = ['I', 'am', 'groot'];
const toSentence = (arr) => {
  let string = arr.join(' ');
  alert(string);
};

toSentence(arr);

module.exports = toSentence
