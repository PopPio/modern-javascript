'use strict';
// const user = {
//     name: 'John',
//     email: 'john@example.com'
// };

// function init(name, isTrue) {
//     document.getElementById('output').innerHTML = `${user.name} ${user.email}`
// }

// const init = (name, isTrue) => {
//     document.getElementById('output').innerHTML = `${user.name} ${user.email}`
// }
// init()
// function nameString() {
//     return `${user.name} ${user.email}`;
// }
// const nameString = name => `${name} ${user.email}`
//
// document.getElementById('output').innerHTML = nameString('Pop');

let users = [
    {
        name: 'Andrew',
        email: 'andrew@example.com'
    },
    {
        name: 'Ashley',
        email: 'ashley@example.com'
    }
]

let names = [];

users.forEach(user => names.push(user.name))

document.getElementById('output').innerHTML = names.join(', ');

document.getElementById('btn').addEventListener('click', (e) => {
    // console.log(this)
    const getDetails = () => {
        console.log(e.currentTarget)
        return `The button id is ${e.currentTarget.getAttribute('id')}`
    }

    document.getElementById('output').innerHTML = getDetails()
});
