import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
		import { getDatabase } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
var config = {
  apiKey: "AIzaSyBaDLXQyBLpdE45urpCZmNUGI2x2mwLkQM",
  authDomain: "books-aef12.firebaseapp.com",
  databaseURL: "https://books-aef12-default-rtdb.firebaseio.com",
  projectId: "books-aef12",
  storageBucket: "books-aef12.appspot.com",
  messagingSenderId: "1033623357387",
  appId: "1:1033623357387:web:21b2d12415bc4258c1d84e",
  measurementId: "G-8ZPV74872R"
  };
  firebase.initializeApp(config);
// Get a reference to the products collection in the database
var productsRef = firebase.database().ref('products');

// Get the form element
var form = document.getElementById('add-product-form');

// Add an event listener for the form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the values from the form inputs
  var name = document.getElementById('name').value;
  var price = document.getElementById('price').value;

  // Create a new product object
  var newProduct = {
    name: name,
    price: price
  };

  // Push the new product to the Firebase Realtime Database
  productsRef.push(newProduct)
    .then(function() {
      // Clear the form inputs after successful upload
      form.reset();
    })
    .catch(function(error) {
      // Handle any errors that occur during upload
      console.error('Error uploading product:', error);
    });
});
