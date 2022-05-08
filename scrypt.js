//alert("You are not pots?");



/**Типы данных

1. Примитивные
-Number: 2021, 19, 1.5, NaN, Infinity
-String: 'Hello', "Hello" 
-Boolean: true, false
-Null: Null
-Undefined: Undefined
-Symbol () 
*/
console.log(2021, 1.5 );// вывод числа
console.log(212 * 'jsds');//число * на строку - NaN(Not a Number)
console.log(1 / 0); // деление числа на ноль - infinity
console.log('Hello', "Hello", `Hello`);// вывод строки
console.log(true, false);//правда, ложь
console.log(null); //значение не известно
console.log(undefined);//переменная ни чему не равна, ни чего не задано
console.log(Symbol());

/**
 * 2. Объекты.(Reference type),Передаются по ссылке.
 * - Object {name: 'Alex' , age: '35'}
 *  Array[1, 2, 3]
 * Function: function foo() {}
 * Date: newDate()
 */
console.log({name: 'Alex', age: 35});
console.log([1,2,3,4]);

/**
 * Особенности
 * - JS динамически типизированный язык
 * - Одна и та же переменная может хранить в себе любой тип данных
 * - Нам не нужно определять тип данных при создании переменных
 * - Если мы хотим использовать статическую типизацию мы можем использовать TypeScript или Flow
 */

//Переменные var, let, const
var name = 'Alex'; //Объявление переменной
console.log(name);
name = 'Alexey'; //Переопределение переменной
console.log(name);

var age; //Объявление переменной
console.log(age);
age = 35; //Переопределение переменной
console.log(age);

var $name = 'Ivan';
var _name = 'Vova';
//var 1name = 'Grisha'; - нельзя так называть

var userAge = 35; //camelkase
var user_age = 23;
var UserAge = 44; // используется для названия массивов, стилей и пр.
var userage = 22;


//var = car;
console.log(car);
var car = 'bmw';
//var car = 'audi';
console.log(car);



let nickname = 'Alex';
nickname = 'Vasya';
console.log(nickname);

const firstName = 'Alex';
console.log(firstName);

const user = {
    name: 'Alex',
    age: 35
};
user.age = 32;
console.log(user);





//Преобразование типов данных
let value;

//Number to string
value = String(10);
value = String(10+25);
value = (20).toString();

//BooLean to string
value = String(false);
//Array to string
value = String([1,2,3]);
//object to string
value = String({name: 'Denis'});
value = 30 + '' + undefined; //не явные преобразования
value = 30 * '5';     //не явные преобразования
value = true + 10;
//String to number
value = Number(25);
value = Number(false);
value = Number(null);
value = Number('true');
value = Number([1,2,3]);
value = parseInt('200');
value = parseFloat(200.232);
//boolean to string
value = Boolean('Hello'); //true
value = Boolean('');//false
value = Boolean(100);//true
value = Boolean(0);//false
value = Boolean(undefined);//false
value = Boolean({});//true
value = Boolean([]);//true

console.log(value);
console.log(typeof value);

console.clear()

//Numbers
const num1 = 10;
const num2 = 20;
let numb;

//+ - / *
numb = num1 + num2;
numb = numb + 100;
numb += 100;
//numb = 5 % 2;
numb++;
numb--;
++numb;
--numb;
numb = 0.6 + 0.7;
//numb = parseFloat(numb.toFixed(1));
numb = ( 0.6 * 10 + 0.7 *10) / 10;

//Math
numb = Math;
numb = Math.PI;
numb = Math.random();
numb = Math.round(2.4);
numb = Math.ceil(2.1);
numb = Math.floor(2.6);
numb = Math.min(2,23,54,76,1,65,756);
//numb = Math.max(1,32,44,2,33,23,6,);
numb = Math.floor(Math.random()* 10 + 1);
const Arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green'];
numb = Math.floor(Math.random()* Arr.length);

console.log(numb, Arr[numb]);















