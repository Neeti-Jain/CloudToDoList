
  // Initialize Firebase
  // Initialize Firebase
  var config = {
   apiKey: "AIzaSyAvbtT8F5oyRGyXz7jL9ZuhCbQvbNX_cUA",
   authDomain:  "mytrello-8d0e2.firebaseapp.com",
   databaseURL: "https://mytrello-8d0e2.firebaseio.com",
   projectId:   "mytrello-8d0e2",
   storageBucket: "mytrello-8d0e2.appspot.com",
   messagingSenderId: "243557495203"
 };
 firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
  userdiv = document.getElementById("user_div");
  logindiv =document.getElementById("login_div")
  if(userdiv!=null && logindiv!=null)
  {
    if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  }
  var user = firebase.auth().currentUser;
  if(user != null)
  {
  	var email_id = user.email;
    if(document.getElementById("user_para")!=null)
  	{document.getElementById("user_para").innerHTML = "Welcome " + email_id ;}
  }
});

function create_user(){

	var userEmail=document.getElementById("email").value;
	var userPass=document.getElementById("pswd").value;
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("Error " + errorMessage);
  // ...
});
	
	}

function login(){
	
	var userEmail=document.getElementById("email").value;
	var userPass=document.getElementById("pswd").value;
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("Error " + errorMessage);
  // ...
});
	
	}

function logout(){
	alert("logout");
	firebase.auth().signOut();
	}


