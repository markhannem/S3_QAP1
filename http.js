//Author: Mark Hannem
//Date: Sept 14th 2022
//Last Updated: Sept 19 2022

// DESCRIBING GLOBAL OBJECT : http

// provides an HTTP client/server implementation
// Can create a web server using http where a user can display web technologies like: HTML, CSS, & JS

// Creating a Server Example

//adding the http and fs library into the code we plan to write
let http = require("http");
let fs = require("fs");
//Create what port to listen to
let port = 3000;

// Creating server variable, createServer function with request and response parameters

let server = http.createServer(function (req, res) {
  // writeHead function , number is status code:200 -means everything is working 100%
  // header of "Content-Type", which will be our key
  // This will tell browser that the data is in HTML
  // res.end() to end the response
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("ERROR, The File Was Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

// Setup server to listen on our port we made
// Create error function
server.listen(port, function (error) {
  if (error) {
    console.log("There was an error", error);
  } else {
    console.log("Server is working on port " + port);
  }
});

// To run server enter node http in terminal
// Once server is running you should enter localhost:3000 in your web browser
// CTRL + C to END server
// Have to restart server everytime you make a change
