  // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCz7o6ex1lrsCNmYx0uBSU14ZYv4LZJTsU",
        authDomain: "rocket-league-app.firebaseapp.com",
        databaseURL: "https://rocket-league-app.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "330488432216"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  function lol() {
  	var counter = firebase.database().ref('counter/');
  	counter.on('value', function(snapshot) {
  		console.log(snapshot);
  	  // updateStarCount(postElement, snapshot.val());
  	});
  }