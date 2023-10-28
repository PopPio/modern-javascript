'use strict';

let myPromise = new Promise((resolve, reject) => {
    // call an API
    let user = {
        name: 'John',
        email: 'john@example.com'
    };

    setTimeout(() => {
        resolve(user);
        // reject('Sorry, could not retrieve the user.')
    }, 2000);
})

const getAdditionalUserData = (user) => {
    document.getElementById('output').innerHTML = `${user.name} (${user.email})`;

    return new Promise((resolve, reject) => {
        // calling another API to get more user data
        user.favoriteColor = 'blue';
        user.currentDrink = 'La Croix';

        setTimeout(() => resolve(user), 2000);
    });
};

// myPromise.then((user) => {
//     document.getElementById('output').innerHTML = `${user.name} (${user.email})`;
// }).catch((error) => {
//     document.getElementById('output').innerHTML = error;
// });

myPromise.then(getAdditionalUserData)
    .then((user) => {
        document.getElementById('output').innerHTML = `${user.name} (${user.email}) likes ${user.favoriteColor} and drinks ${user.currentDrink}`;
    }).catch((error) => {
        document.getElementById('output').innerHTML = error;
    });

document.getElementById('output').innerHTML = 'Loading...';
