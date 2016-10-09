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

  function fetchCounter1() {
  	var counter = database.ref('counter/').once('value').then(function(snapshot){
  		var count = snapshot.val();
  		$("#clicks").html(count);
  	});
  };

  function updateCounter1() {
  	var counter = database.ref('counter/').once('value').then(function(snapshot){
  		var count = snapshot.val();
  		count++;
  		database.ref('counter/').set(count);
  		$("#clicks").html(count);
  	});
  };
  function fetchCounter2() {
  	var counter = database.ref('counter2/').once('value').then(function(snapshot){
  		var count = snapshot.val();
  		$("#clicks2").html(count);
  	});
  };

  function updateCounter2() {
  	var counter = database.ref('counter2/').once('value').then(function(snapshot){
  		var count = snapshot.val();
  		count++;
  		database.ref('counter2/').set(count);
  		$("#clicks2").html(count);
  	});
  };
  function fetchCounter3() {
  	var counter = database.ref('counter3/').once('value').then(function(snapshot){
  		var count = snapshot.val();
  		$("#clicks3").html(count);
  	});
  };

  function updateCounter3() {
  	var counter = database.ref('counter3/').once('value').then(function(snapshot){
  		var count = snapshot.val();
  		count++;
  		database.ref('counter3/').set(count);
  		$("#clicks3").html(count);
  	});
  };