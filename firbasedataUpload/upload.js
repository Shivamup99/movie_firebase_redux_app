
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAfZagZ66T2DGgmxJAVhD5mDQFiFZmQpBc",
  authDomain: "t-movie-f4d96.firebaseapp.com",
  projectId: "t-movie-f4d96",
  storageBucket: "t-movie-f4d96.appspot.com",
  messagingSenderId: "255212834469",
  appId: "1:255212834469:web:117a0ee457bca53abcc74c",
  measurementId: "G-3Z13WX8E15"
  });
  
var db = firebase.firestore();

var menu =[  
    {  
       "id":1,
       "name":"Focaccia al rosmarino",
       "description":"Wood fired rosemary and garlic focaccia",
       "price":8.50,
       "type":"Appetizers"
    },
    {  
       "id":2,
       "name":"Burratta con speck",
       "description":"Burratta cheese, imported smoked prok belly prosciutto, pached balsamic pear",
       "price":13.50,
       "type":"Appetizers"
    }
 ]

menu.forEach(function(obj) {
    db.collection("menu").add({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
        type: obj.type
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
