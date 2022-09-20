//Author: Mark Hannem
//Date: Sept 14th 2022
//Last Updated:  Sept 19 2022

// DESCRIBING GLOBAL OBJECT : process

// process provides info about the current Node process
// Also it has control over the process
// process is an instance of EventEmitter

// Examples

//argv- show what parameters are being used

// shows that node and the script are being used
console.log(process.argv);

//stdout - like console.log to write and display messages

process.stdout.write("Hello Peter!" + "\n");

//platform- shows the operating system of the computer

console.log(process.platform);
