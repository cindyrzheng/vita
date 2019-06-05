var admin = require("firebase-admin");
var firebase = require("firebase");

var serviceAccount = require("../serviceAccountKey.json");

const firebaseConfig = {
    apiKey: "AIzaSyDp2-wFij9BUFkftqYfD-GSf2VF5F8edbo",
    authDomain: "vitadb-c40c2.firebaseapp.com",
    databaseURL: "https://vitadb-c40c2.firebaseio.com",
    projectId: "vitadb-c40c2",
    storageBucket: "vitadb-c40c2.appspot.com",
    messagingSenderId: "99277002147",
    appId: "1:99277002147:web:933004ef72a0d128"
};

function init() {
    firebase.initializeApp(firebaseConfig);
}

function initAdmin() {
    return admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://vitadb-c40c2.firebaseio.com/"
    });
}



exports.method = init();
exports.method = initAdmin();
