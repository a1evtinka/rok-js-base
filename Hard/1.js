/*

Создайте функцию, которая принимает в качестве аргументов три неотрицательных числа, а возвращает значение true («истина»), 
если три стороны могут сформировать треугольник,
и false («ложь») в противоположном случае.  
Каждое число представляет собой длину стороны треугольника. 

Пример: (3, 4, 5) => true  
  
Для начала пропиши аргументы функции.  

*/


/*
Треугольником не является любая фигура у которой нет трех любых углов или один из углов меньше нуля. 
*/ 
const validTriangle = (one, two, three) => {
  if (one<=0 || two<=0 || three<=0) {
    return console.log('false');
  } else {
    return console.log('true');
  }
};

validTriangle(1, 0 ,1);
module.exports = validTriangle
