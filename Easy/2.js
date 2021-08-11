/*

Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.

Пример: ({ 'key': 'property' }, 'key') => 'property'

*/

const objValue = (obj, key) => {
  console.log(obj[key]);
};

module.exports = objValue
