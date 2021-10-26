/*

Создайте функцию, которая принимает в качестве аргументов массив из слов, а возвращает созданное из этих слов предложение.  

Пример: ['I', 'am', 'groot'] => 'I am groot'

*/


const toSentence = (arr) => {
   let str = arr.join(' ');
   return str;
};

module.exports = toSentence;


