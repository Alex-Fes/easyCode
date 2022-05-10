const firstName = 'Alexey';
const lastName = 'Fesenko';
const age = '35';
let str;

str = 'Hello,' + ' ' + 'my name' + ' ' + firstName + ' ' + lastName;

str = '<ul>' +
        '<li> First name: ' + firstName + '</li>' +
        '<li> Last name: ' + lastName + '</li>' +
        '<li> Age: ' + age + '</li>' +
      '</ul>';

//ES6

str = `
    <ul>
    <li>First name: ${firstName}</li>
    <li>Last name: ${lastName}</li>
    <li>Age: ${age}</li>
    <li>Math.random: ${Math.random()}</li>
    <li>5 + 5: ${5 +5}</li>
    </ul>
`;


//console.log(str);

document.body.innerHTML = str;