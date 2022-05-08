const firstName = 'Alexey';
const lastName = 'Fesenko';
const age = 35;
const str = 'Hello, my name is Alexey';

let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value += ' I am ' + age;
value = firstName.length;
value = firstName[3];
value = firstName[firstName.length - 1];
value = lastName[lastName.length - 1];
value = firstName.toUpperCase();
value = firstName.concat(' ', lastName);// то же что и value = firstName + ' ' + lastName;
value = str.indexOf('l', 4);
value = str.includes('my');
value = str.slice(0, 5);
value = str.slice(0, -4);
value = str.replace('Alexey', 'Vova');


console.log(value);







