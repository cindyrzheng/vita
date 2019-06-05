const bodyParser = require('body-parser');
const express  = require('express');
var multer = require('multer');
const path = require('path');
var cors = require('cors');
var firebase = require('firebase');
var admin = require('firebase-admin');

var serviceAccount = require("./serviceAccountKey.json");
var fbinit = require("./db_controllers/db_manager");
var login = require("./db_controllers/login");
var signup = require("./db_controllers/signup");
var logout = require("./db_controllers/logout");
var getuser = require("./db_controllers/getuser");
var addWater = require("./db_controllers/addwater");
var addMood = require("./db_controllers/addmood");


const app = express();
var date = new Date();
var day = date.toString();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

fbinit.init;
fbinit.initAdmin;

const firebasedb = admin.database();

app.post('/login', (req, res) => {
    console.log("login");
    login(req.query.email, req.query.password)
    .then((loggedInUser) => {
        res.send(loggedInUser);
    })
    .catch((error) => {
        console.log(error);
    });
});

app.post('/register', (req, res) => {
    signup(req.query.email, req.query.password)
    .then((loggedInUser) => {
        res.send(loggedInUser);
        console.log(firebasedb);
        firebasedb.ref('users/' + firebase.auth().currentUser.uid + "/profile").set(JSON.parse(JSON.stringify(firebase.auth().currentUser)));
        firebasedb.ref('users/' + firebase.auth().currentUser.uid + "/sleep" + "/" + day).set(0);
        firebasedb.ref('users/' + firebase.auth().currentUser.uid + "/water" + "/" + day).set(0);
        firebasedb.ref('users/' + firebase.auth().currentUser.uid + "/mood" + "/" + day).set("happy");
    })
    .catch((error) => {
        console.log(error);
    })
});

app.post('/logout', (req,res) => {
    logout()
    .then(() => {
        console.log("Logged Out");
    })
    .catch((error) => {
        console.log(error);
    });
});

app.post('/getuser', (req,res) => {
    res.send(getuser().currentUser.email);
});

app.post('/addwater', (req, res) => {
    addWater(req.query.water)
    .then(() => {
        res.send("Water added");
    })
    .catch((error) => {
        console.log(error);
    });
});

app.post('/addsleep', (req, res) => {
    
});

app.post('/addmood', (req, res) => {
    addMood(req.query.mood)
    .then(() => {
        res.send("Mood added");
    })
    .catch((error) => {
        console.log(error);
    });
});

app.get('/', (req, res) => {
  res.send("Hello World")
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});