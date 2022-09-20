//Author: Mark Hannem
//Date: Sept 14th 2022
//Last Updated: Sept 19 2022

// DESCRIBING GLOBAL OBJECT : events

// event: an action on the computer, you can create, listen, open , close, etc
// to use events, use the require() method

// Some Event Methods
// addListener(event, listener) - adds a listener to the listeners array
// on(event, listener) - can be called as an alias of emitter.addListener()
// once(event, listener) - one-time listener for the event
// emit(event, argument...) - raise the event with argument

//events example

let EventEmitter = require("events");

let emitter = new EventEmitter();

// Event Listener
emitter.on("message", function () {
  console.log("Listener Operational");
});

//The Event
emitter.emit("message");
