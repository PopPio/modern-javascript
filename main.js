'use strict';
const user = {
    name: 'John',
    email: 'john@example.com'
};

function init() {
    // if (true) {
    //     var email = 'john@example.com'
    //     let email = 'john@example.com'
    //     document.getElementById('output').innerHTML = email
    // }
    user.email = "changed@example.com"

    document.getElementById('output').innerHTML = user.email
}

init()
