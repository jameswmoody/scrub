import { 
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DB_URL,
    FIREBASE_SENDER_ID,
    FIREBASE_APP_ID
} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DB_URL,
    projectId: "scrub-8eac3",
    storageBucket: "scrub-8eac3.appspot.com",
    messagingSenderId: FIREBASE_SENDER_ID,
    appId: FIREBASE_APP_ID
};

module.exports = firebaseConfig;
