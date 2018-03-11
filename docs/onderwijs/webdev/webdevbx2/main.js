// Initialize Firebase and global variables
  var config = {
    apiKey: "AIzaSyAG1vLpvT-xVyl7eRCu8FU8wokE42eB78Q",
    authDomain: "minortest-c3726.firebaseapp.com",
    databaseURL: "https://minortest-c3726.firebaseio.com",
    projectId: "minortest-c3726",
    storageBucket: "",
    messagingSenderId: "365515981256"
  };
  
firebase.initializeApp(config);

var database = firebase.database();

var colorArray = ["tomato", "skyblue", "white", "black"];
var resVal = 1;

// Function for changing background color of element
function changeBgClr(x, y) {
  x.style.backgroundColor = colorArray[y];
}

// Function for changing background image of element
function changeBgImg(x, url) {
  x.style.backgroundImage = "url(" + url + ")";
}

// Function for changing font color of element
function fontClr(x, y) {
  x.style.color = colorArray[y];
}

// Function for changing text of element
function changeTxt() {
  
  if(resVal == 1) {
    document.getElementById("change-txt").innerHTML = "Ciao!";
    resVal = resVal * -1;
    console.log(resVal);
  } else {
    document.getElementById("change-txt").innerHTML = "Arrivederci!";
    resVal = resVal * -1;
    console.log(resVal);
  }
  
}

// Function for writing data to Firebase

function writeNewUser() {

var name = document.getElementById('inlineName').value;
var domain = document.getElementById('inlineDomain').value;

  // A user entry.
  var userData = {
    name: name,
    domain: domain
  };

  // Get a key for a new User
  var newUserKey = database.ref().child('users').push().key;

  // Write the new user data
  var updates = {};
  updates['/users/' + newUserKey] = userData;

  return database.ref().update(updates);
}
  
  