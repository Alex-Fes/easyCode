// function foo() {
//     console.log('Hello Mudak');
// }

// foo();

// foo.field = 'Sam Mudak';
// console.log(foo.field);

// const arr = ['Aleksey', 'Yana', 'Vlad', 'Marina', 'Sveta'];

// let newArr = [];
// for(let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].length);
// }
// console.log(newArr);

// let newArr1 = [];
// for(let i = 0; i < arr.length; i++) {
//     newArr1.push(arr[i].toUpperCase());
// }
// console.log(newArr1);



const names = ['Aleksey', 'Yana', 'Vlad', 'Marina', 'Sveta'];

function mapArray(arr, fn) {
    const res = [];
    for(let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

function nameLength(el) {
    // console.log(el);
    return el.length;
}

function nameToUpperCase(el) {
    return el.toUpperCase();
}

const result = mapArray(names, nameLength);
const result1 = mapArray(names, nameToUpperCase);
// 
function greeting(firstName) {
    return function(lastName) {
        return `Hello, ${firstName} ${lastName}`;   
    }
}

// const testGreeting = greeting('Aleksey');
// const fullName = testGreeting('Fesenko');
const fullName = greeting('Aleksey')('Fesenko');
// console.log(fullName);


function question(job) {
    const jobDictionary = {
    developer: 'что такое JavaScript?',
    teacher: 'какой предмет вы ведете?',
    }
    return function(name){
        return `${name}, ${jobDictionary[job]} `;
    }



    // if(job === 'developer'){
    //     return function(name){
    //         return `${name}, что такое JavaScript?`;
    //     }
    // } else if (job === 'teacher'){
    //     return function(name){
    //         return `${name}, какой предмет вы ведете?`;
    //     }
    // }
}

const developerQuestion = question('developer');
console.log(developerQuestion('ALeksey'));
const teacherQuestion = question('teacher');
console.log(teacherQuestion('Yana'));











