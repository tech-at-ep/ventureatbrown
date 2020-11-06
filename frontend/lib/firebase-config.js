import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCbZ1xswQCXMS72YgyHHVWPvT9xM6Mh2to",
    authDomain: "brown-ep.firebaseapp.com",
    databaseURL: "https://brown-ep.firebaseio.com",
    projectId: "brown-ep",
    storageBucket: "brown-ep.appspot.com",
    messagingSenderId: "359981825558",
    appId: "1:359981825558:web:b52dd6407dd9da49f1bf37",
    measurementId: "G-QJVT5108SY"
};
try {
    if (typeof window !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics()
    }
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

const fb = firebase
export default fb;