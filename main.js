'use strict';

/*let myPromise = new Promise((resolve, reject) => {
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

document.getElementById('output').innerHTML = 'Loading...';*/

async function init() {
    const start = Date.now();
    document.getElementById('output').innerHTML = `0: init()`;

    const userPromise = getUserData();
    const welcomeStringPromise = getWelcomeString();

    // const user = await getUserData();
    const user = await userPromise;
    document.getElementById('output').innerHTML += `<br>${Date.now() - start} ${user.name} (${user.email})`;

    // const welcomeString = await getWelcomeString();
    const welcomeString = await welcomeStringPromise;
    document.getElementById('output').innerHTML += `<br>${Date.now() - start} ${welcomeString}`;

}

function getUserData() {
    return new Promise((resolve, reject) => {
        let user = {
            name: 'John',
            email: 'john@example.com'
        };

        setTimeout(() => {
            resolve(user);
        }, 2000);
    });
}

function getWelcomeString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Welcome to the site!');
        }, 2000);
    });
}

init();
