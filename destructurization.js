const user = {
    firstName: 'Alex',
    lastName: 'Fesenko',
    age: '36',
    info: {
        work: 'EasyCode',
        skills: ['html','css','js'],
    }
}


// const {firstName: name, lastName, age: years = 35} = user;
// const { info: {work,skills}} = user;
// console.log(work, skills);

const colors = ['white', 'black', 'red', '#123123'];
const [w, b, red, green = 'green'] = colors;
console.log(w, b, red, green);

const names = ['Alex', 'Denis', 'ivan', 'Maxim'];
const [name1, ...otherNames] = names;
// console.log(name1,otherNames);
// const [...newNames] = names;
const newNames = [...names];
console.log(...newNames);

const colorNames = ['some value', ...colors, ...names];
console.log(colorNames);

const newUser = {...user, age: 23};
const {info: { skills: [html, css, js],}} = newUser;
console.log(html, css, js);


const nestedArr = ['Hello World', ['key', 'value']];
const [ ,[k, v]] = nestedArr;
// console.log(k,v);

function myPerson({firstName = '&', lastName = '&', info: {skills} = {}} = {}) {
    console.log(firstName, lastName, skills);
}

// myPerson(newUser);


function foo(x, y, ...other) {
    console.log(arguments);
    const [...args] = arguments;
    console.log(other);
}
foo(1,2,5,6);

const numbers = [2, 3];
function foo2(x,y) {
    console.log(x,y);
}
foo(...numbers);










