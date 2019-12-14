{
  var firebaseConfig = {
    apiKey: "AIzaSyCAAlbBEnDcCHq1AQoqaYfWrBzhOwZ4YHg",
    authDomain: "cpw-firebase.firebaseapp.com",
    databaseURL: "https://cpw-firebase.firebaseio.com/",
    projectId: "cpw-firebase",
    storageBucket: "cpw-firebase.appspot.com",
    messagingSenderId: "504432179730",
    appId: "1:504432179730:web:d8526dcbc8e10de60336cb",
    measurementId: "G-GBBDT4CT63"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.database();
  firebase.auth();
  firebase.analytics();
  
}