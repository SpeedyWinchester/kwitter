const firebaseConfig = {
      apiKey: "AIzaSyBV5utv_UEMAYjR6LdKEjR9c89Y1qdsFlk",
      authDomain: "kwitter-272d2.firebaseapp.com",
      databaseURL: "https://kwitter-272d2-default-rtdb.firebaseio.com",
      projectId: "kwitter-272d2",
      storageBucket: "kwitter-272d2.appspot.com",
      messagingSenderId: "148225850329",
      appId: "1:148225850329:web:2c73e40f0ee562d30a77c8"
    };

firebase.initializeApp(firebaseConfig)
room_name=localStorage.getItem("room name")
user_name=localStoragge.getItem("username")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("room name")
      window.location="index.html"
}
function send(){
      message=document.getElementById("message").value
      firebase.database().ref(room_name).push({
            like:0,message:message,name:user_name
      })
      document.getElementById("message").value=""
}