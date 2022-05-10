const user = {
    firstName: 'Alexey',
    age: 35,
    isAdmin: true,
    email: 'test@test.ru',
    'user-address': {
        sity: 'SPb'
    },
    skills: ['html', 'css', 'js']
};

let value;
let prop = 'skills';

value = user.firstName;
value = user['isAdmin'];
value = user['user-address'].sity;
value = user['user-address']['sity'];
value = user[prop][1];

user.firstName = 'Alex';
value = user.firstName;

user.info = 'Some info';
value = user.info;

user['user-address'].sity = 'lviv';
user['user-address'].country = 'Ukraine';
value = user['user-address'].country;
user.plane = {};
user.plane.basic = 'basic';


console.log(value);
console.log(user);