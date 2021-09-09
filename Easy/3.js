/*

Создайте функцию, которая принимает в качестве аргументов многомерный массив (массив, содержащий другие массивы) чисел 
и число из одного из вложенных массивов, а возвращает индекс вложенного массива, в котором это число находится.

Пример: ( [[1], [2, 3], [4]], 3 ) => 1

*/
arr = [[1], [2, 3], [4]];
const nestedArr = (arr, number) => {
  for(let j = 0; j < arr.length; j++) {
    let newArr = arr[j];
    for(let n = 0; n < newArr.length; n++) {
      if (newArr[n] == number) {
        alert('Element index:', n);
      } else {
        alert('Такого элемента в массиве нет')
      };
    };
  };
}


nestedArr(arr, 1);
module.exports = nestedArr

