
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAFUm51YHD287CRI3j9iuQRrJlKgwDuCWw",
    authDomain: "practice-activity-4b28e.firebaseapp.com",
    databaseURL: "https://practice-activity-4b28e-default-rtdb.firebaseio.com",
    projectId: "practice-activity-4b28e",
    storageBucket: "practice-activity-4b28e.appspot.com",
    messagingSenderId: "227284207257",
    appId: "1:227284207257:web:0511f2475ce1e4956d1a08"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
     username= document.getElementById("user_name").value;
      firebase.database().ref("/").child(username).update({
         purpose:"adding user" 
      });

  }