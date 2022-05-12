// while, do while, for, for of, for in
// let i = 10;
// while (i--) {
//     console.log(i);
// }

// do {
//     console.log('action');
// } while (i > 0);

// for (let i = 0; i < 10; i++) {
//     if(i === 5){
        //continue;
//         break;
//     }
//     console.log(i);
// }

// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
   // console.log(str[i]  + '!');
//     res += str[i] + '*';
// }

// console.log(res);


// let colors = ['red', 'blue', 'black', 'white'];

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
//     colors[i] = colors[i].toUpperCase();
// }
// console.log(colors);


const users = [
    {
        name: 'Alexey',
        age: 24
    },
    {
        name: 'Vika',
        age: 29
    },
    {
        name: 'Yana',
        age: 33
    },
    {
        name: 'Boris',
        age: 23
    }
];
const userObj = {};

for (let i = 0; i < users.length; i++) {
    //console.log(users[i].age);
    userObj[users[i].name] = users[i];
};

//console.log(userObj['Yana']);

// const user = {
//     name: 'Alexey',
//     age: 35
// }

// for (let key in userObj) {
//     console.log(key);
//     console.log(userObj[key]);
// }


for (let value of users) {
    console.log(value);
}







