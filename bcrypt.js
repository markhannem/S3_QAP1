//Author: Mark Hannem
//Date: Sept 14th 2022
//Last Updated:  Sept 19 2022
// NOTE THERE ARE 3 PROGRAMS AND 2/3 ARE COMMENTED OUT

// Using the NPM package: Bcrypt: Used to encrypt password so the login users data isnt stored in plain text. Storing private data in plain text can make it very easy for hackers to gain access to the data.

// PROGRAM 1---------------------------------------------------------- Using Bcrypt to encrypt a plain text password

// defining bcrypt to use in the hash function
let bcrypt = require("bcrypt");

// Setting  the password and wrongPassword variables
let password = "pass123";
console.log(password);

let wrongPassword = "pass321";
console.log(wrongPassword);

// Creating a hash to encrypt a users password
bcrypt.hash(password, 5, function (err, hash) {
  console.log("Encrypted Password: " + hash);
  // comparing the right password to the hash created
  bcrypt.compare(password, hash, function (err, result) {
    console.log("pass123:", "Correct Password? --> " + result);
  });
  // comparing the wrong password to the hash created
  bcrypt.compare(wrongPassword, hash, function (err, result) {
    console.log("pass321:", "Correct Password? --> " + result);
  });
});

// PROGRAM 2---------------------------------------------------------- Console Entry Example using readline module

// Declaring variable and setting up interface prompt in console
// let userPassword = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // User input entry for password then shows password user entered
// userPassword.question("What is your password?: ", (password) => {
//   console.log(`Your Password is Saved As: ${password}`);
//   userPassword.close();
// });

// Some Npm Moment Examples

// PROGRAM 3---------------------------------------------------------- Declare moment variable and require moment module
// let moment = require("moment");

// Display current date and time in a specific format
// console.log("Current Date and Time:");
// console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

// // Displays 5 days ago
// console.log("5 Days Ago it Was:");
// console.log(moment().subtract(5, "days").calendar());
