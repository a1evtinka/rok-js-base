const funcEasy1 = require('./Easy/1.js')
const funcEasy2 = require('./Easy/2.js')
const funcEasy3 = require("./Easy/3.js")

const funcNormal1 = require('./Normal/1.js')
const funcNormal2 = require('./Normal/2.js')
const funcNormal3 = require('./Normal/3.js')

const funcHard1 = require('./Hard/1.js')
const funcHard2 = require('./Hard/2.js')
const funcHard3 = require('./Hard/3.js')

describe('Легкий уровень', () => {

  test('Создайте функцию которая, будет принимать массив из слов и возвращать предложение', () => {
    expect(funcEasy1(['Привет', 'мир', '!'])).toBe('Привет мир !')
    expect(funcEasy1(['Грок', 'JS'])).toBe('Грок JS')
    expect(funcEasy1(['Grok', 'Marathon', 'Решение', 'задач'])).toBe('Grok Marathon Решение задач')
  })

  test('Создайте функцию которая, первым аргументом получает объект, а вторым ключ объекта и возвращает значение', () => {
    const obj = {
      'Коля':'1000',
      'Вася':'500',
      'Петя':'200'
    }
    expect(funcEasy2(obj, 'Петя')).toBe('200')
    expect(funcEasy2(obj, 'Коля')).toBe('1000')
    expect(funcEasy2(obj, 'Вася')).toBe('500')

  })

  test('Создайте функцию которая, принимает многомерный массив чисел и число и возвращает индекс в котором это число нахродится', () => {
    const arr = [[1, 2, 3], [4, 5, 6], [7,8,9]]
    expect(funcEasy3(arr, 3)).toBe(0)
    expect(funcEasy3(arr, 9)).toBe(2)
    expect(funcEasy3(arr, 4)).toBe(1)
    expect(funcEasy3(arr, 11)).toBe(undefined)
  })
})

describe('Средний уровень', () => {
  test('Создайте функцию которая, будет принимать строку и возвращать буквы этой строки', () => {
    console.log = jest.fn();
    funcNormal1('Elbrus');
    expect(console.log).toHaveBeenCalledWith('E');
    expect(console.log).toHaveBeenCalledWith('l');
    expect(console.log).toHaveBeenCalledWith('b');
    expect(console.log).toHaveBeenCalledWith('r');
    expect(console.log).toHaveBeenCalledWith('u');
    expect(console.log).toHaveBeenCalledWith('s');
  });

  test('Массив из случайных чисел', () => {
    expect(funcNormal2()).not.toEqual(funcNormal2())
    expect(funcNormal2()).not.toEqual(funcNormal2())
    expect(funcNormal2()).not.toEqual(funcNormal2())
  });

  test('Сумма диапазона чисел', () => {
    expect(funcNormal3(1, 10)).toBe(55)
    expect(funcNormal3(4, 4)).toBe(4)
    expect(funcNormal3(5, 3)).toBe(12)
  });

})

describe('Сложный уровень', () => {

  test('Треугольник, имеющий правильные значения', () => {
    expect(funcHard1(0,0,0)).toBe(false)
    expect(funcHard1(1,1,1)).toBe(true)
    expect(funcHard1(3,4,5)).toBe(true)
    expect(funcHard1(4,3,5)).toBe(true)
    expect(funcHard1(5,3,4)).toBe(true)
    expect(funcHard1(10, 10, 100)).toBe(false)
  });

  test('Самая длинная строка', () => {
    expect(funcHard2([])).toBe(null)
    expect(funcHard2(['cat', 'applesauce', 'apples'])).toBe('applesauce')
    expect(funcHard2(['js', 'node', 'express', 'mongoose'])).toBe('mongoose')
  });

  test('camelCase', () => {
    expect(funcHard3('elbrus_bootcamp')).toBe('elbrusBootcamp')
    expect(funcHard3('hello_world')).toBe('helloWorld')
    expect(funcHard3('js_master')).toBe('jsMaster')
  });
})
