let obj1 = {
    name: 'Denis',
    info:{
        skills: ['html','css'],
    },
    
};

let obj2 = {
    age: 33,
}

let newObj = Object.assign({}, obj1, obj2);
newObj = Object.assign({}, obj1);
//console.log(newObj.info === obj1.info);
console.log(JSON.stringify(obj1));

newObj = JSON.parse(JSON.stringify(obj1));
console.log(newObj);


let keys = Object.keys(obj2);
console.log(keys);
let values = Object.values(obj2);
console.log(values);
let entries = Object.entries(obj1);
console.log(entries);
let fromEntries = Object.fromEntries([['a','a_value'],['b', 'b_value']]);
console.log(fromEntries);