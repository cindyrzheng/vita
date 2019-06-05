var admin = require("firebase-admin");
var firebase = require("firebase");

var serviceAccount = require("../serviceAccountKey.json");

function getUser() {
    return firebase.auth();
}

module.exports = getUser;