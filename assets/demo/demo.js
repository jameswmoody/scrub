const firebase = require('firebase');
const request = require('request');
const async = require('async');
const mockUsers = require ('./mockUsers');

require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig);

function login (user, callback) {
    let params = {
        id: user.id,
        photoUrl: user.photoUrl,
        name: user.name,
        location: user.location,
        birthday: user.birthday || ' ',
        aboutMe: user.aboutMe,
        chats: ' ',
        geocode: ' ',
        images: user.images,
        notification: false,
        show: false, 
        report: false,
        swipes: {
            [user.id]: false
        },
        token: ' ' 
    }

    firebase.database().ref('cards/' + user.id).update(params)
        .then(() => {
            return callback(null, user);
        });
}

function formatCityName (city) {
    return city.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

async.each(mockUsers, function(user, callback) {
    request.get(`https://randomuser.me/api/?results=1&nat=us&gender=${user.gender}`, function (err, response, body) {
        if (err) {
            console.log('An error occured while generating sample user image');
        }
        const sampleImg = JSON.parse(body).results[0].picture.large;
        const city = formatCityName(JSON.parse(body).results[0].location.city);
        user.photoUrl = sampleImg;
        user.images = [sampleImg];
        user.location = `${city}, CA`; // All sample users will be Californians ¯\_(ツ)_/¯
        login(user, (err, user) => {
            return callback()
        });
    })
}, function (err) {
    firebase.database().ref('cards/').on('value', (usersRef) => {
        const userIDs = Object.keys(usersRef.val());
        mockUsers.forEach(function (user) {
            const swipes = {
                [user.id]: false
            };
            async.each(userIDs, function(id, callback) {
                swipes[id] = user.likesAll;
                return callback()
            }, function () {
                firebase.database().ref('cards/' + user.id).update({swipes})
                    .then(() => {
                        process.exit();
                    });
            });
        });
    });
});
