// Операторы сравнения - <, > ,>= ,<= , == (не строгое равенство), === (строгое равенство), != (не строгое неравенство), !== (строгое неравенство)
let value;

value = 1 < 2;
value = 2 >= 2;
value = 1 == 1;
value = 1 == '1';
value = 1 === '1';
value = 1 != '1';
value = 1 !== '1';
value = 'a' === 'ab';
value = 'a'.charCodeAt();

//console.log(value);


value = 10;

// if (value !== 10) {
//     console.log('value: 10');
// }
// else {
//     console.log('else');
// }


// value = 12;

// if (value) {
// console.log('some action', value);
// } else {
//     console.log('else', value);
// }


// Логические операторы || (или), && (и), ! (логическое не)

// value = null;

// if (!value){
//     console.log(value);
// }

// value = [1];

// if (value.length) {
//     console.log(value);
// }else {
//     console.log('array is empty');
// }
// value = null;
// if (Array.isArray(value)) {
//     console.log(value);
// }else {
//     console.log('array is empty');
// }


// let user = {
//     name: 'Alex'
// };

// if (user.name) {
//     console.log(user.name);
// } else {
//     console.log('else');
// }


// value = 0 || 1 || null;


// let age = 10

// if (age < 16 || age > 65) {
//     console.log('some action');
// } else {
//     console.log('else');
// }

// let serverNickName = 'jh';
// let nickname = serverNickName || 'default nickname';

// console.log(nickname);


// value = 1 && 0 && 3;
// console.log(value);

// let product = 13;

// if (product >= 5 && product <=20) {
//     console.log('buy');
// } else {
//     console.log('search next');
// }


// value = 1;

// if ( value >= 10) {
//     console.log('value >= 10', value);
// } else if (value < 10) {
//     console.log('value < 10', value);
// } else {
//     console.log('else');
// }


//Тернарный оператор. Switch case.

let a = 1;
let b = 0;

// if (a > 0){
//     b = a;
// } else {
//     b += 1;
// }

//Выражение ? если true : если false

// let c = a > 0 ? b = a : b += 1;
// console.log('b: ${b}, c: ${c}');

b = a > 0 ? a : b + 1;

//Выражение ? если true : выражение ? если true : если false
b = a > 0 ? 2 : a < 0 ? 3 : 1;

// console.log(b);

let color = 'red';

switch (color) {
    case 'yellow':
        console.log('Color is Yellow');
        break;
    case 'red':
        console.log('Color is Red');
        break;
    default:
        console.log('default');
}








