//Author: Mark Hannem
//Date: Sept 14th 2022
//Last Updated: Sept 18 2022

// DESCRIBING GLOBAL OBJECT : console

// console: inbuilt global object to print to stdout and stderr
// a simple debugging console like the JS console on browsers
// object methods are neither synchronous(brower APIs) or asynchronous(other Node.js streams)

// Common Console Methods/Descriptions
// console.log(): prints to stdout with newline
// console.info(): prints to stdout with informational message
// console.error(): prints out an error message
// console.warn(): outputs a warning message
// console.dir(): displays interactive listing of properties
// console.time(): prints to stdout with informational message
// console.timeEnd(): stops the timer and logs time
// console.timeLog(): logs value of timer in console
// console.timeStamp(): adds a marker to browser timeline
// console.trace(): outputs a stack trace
// console.assert(): logs a message and stack trace to console if first argument is false
// console.clear(): clear the console
// console.count(): log number of times this line has been called
// console.countReset(): resets the counter value

// CODE EXAMPLES

// Displays the current directory name in the console
console.log(__dirname);

// Displays an error message
console.error("THIS IS A WARNING TO GET SOME COFFEE!");

// Displays the number of times a line has been called
// Declaring variable for count
let user = "mark";

// Function for count()
function call() {
  console.count(user);
}

// Calling function
call();
call();
call();
