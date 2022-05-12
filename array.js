const numArr = [1, 12, 12321, 2323, 3434, 4545];

let value;
value = numArr.length;
// numArr.length = 0;
// numArr.length = 100;

value = Array.isArray(numArr);
value = numArr[2];
//numArr[2] = 21;
value = numArr.indexOf(3434);
value = numArr.push(100);
value = numArr.pop();
value = numArr.unshift(111);
value = numArr.shift();
value = numArr.slice(1, 3);
value = numArr.splice(1, 2, 'one', 'two');
value = numArr.reverse();
value = numArr.concat(1,2);
value = numArr.join(' ');
value = 'Hello World'.split(" ");
console.log(value, numArr);






















