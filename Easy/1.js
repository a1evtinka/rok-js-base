/*

Создайте функцию, которая принимает в качестве аргументов массив из слов, а возвращает созданное из этих слов предложение.  

Пример: ['I', 'am', 'groot'] => 'I am groot'

*/

arr = ['I', 'am', 'groot'];
const toSentence = (arr) => {
  string = arr.join(' ');
  console.log(string);
};

toSentence(arr);

module.exports = toSentence
