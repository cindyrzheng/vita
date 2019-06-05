var admin = require("firebase-admin");
var firebase = require("firebase");

var serviceAccount = require("../serviceAccountKey.json");

function addWater(firebasedb, waterAmount) {
    var date = new Date();
    var day = date.toString();
    return firebasedb.ref('users/' + firebase.auth().currentUser.uid + "/water" + "/" + day).set(waterAmount);
}

module.exports = addWater;