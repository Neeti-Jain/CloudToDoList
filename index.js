

  var config = {


    apiKey: "AIzaSyBK3IfN3IscQrNaflbZbIAuRVyYaBhiZhA",
    authDomain: "cloud-database-7a516.firebaseapp.com",
    databaseURL: "https://cloud-database-7a516.firebaseio.com",
    projectId: "cloud-database-7a516",
    storageBucket: "cloud-database-7a516.appspot.com",
    messagingSenderId: "889663245618"

 };
 firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
  userdiv = document.getElementById("user_div");
  logindiv =document.getElementById("login_div")
  if(userdiv!=null && logindiv!=null)
  {
    if (user) {
      // User is signed in.
        var user = firebase.auth().currentUser;
        if(user != null)
        {
            var userEmail = user.email;
            localStorage.setItem("user_email_id", userEmail);
            userEmail = getFormattedEmail(userEmail)
            localStorage.setItem("userEmail", userEmail);
        }
     
      if(document.getElementById("startref")!=null) {
        document.getElementById("startref").click();
      }
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

  }
});

function login(){
  
  var userEmail=document.getElementById("email").value;
  var userPass=document.getElementById("pswd").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("Error " + errorMessage);
});
  
  }

 
 function logout(){
  firebase.auth().signOut();
  }
 

function create_user(){
  var userEmail=document.getElementById("email").value;
  var userPass=document.getElementById("pswd").value;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  if(errorCode == 'auth/email-already-in-use')
  {
    login()
  }
  else
  {
    var errorMessage = error.message;
    alert("Error " + errorMessage);
  }
});
  
  }

function getFormattedEmail(userEmail)
{
    find1 = '[.]'
    var re1 = new RegExp(find1, 'g');

    find2 = '@'
    var re2 = new RegExp(find2, 'g');
    userEmail = userEmail.trim().replace(re1, '').replace(re2,'').toLowerCase();
    return userEmail;
}


