import ReBase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAz2V0sO0znAvRSSTzTAorzUbOxxc4QCGI",
        authDomain: "catch-of-the-day-pgospodinov.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-pgospodinov-default-rtdb.firebaseio.com"
})

const base = ReBase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;