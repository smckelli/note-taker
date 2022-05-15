// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Require routes file
require('./routing/routes')(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});


// This code is largely borrowed from amandalatkins at https://github.com/amandalatkins/note-taker
// I got entirely smoked on this challenge with very little understanding of how to do this or even start
// I needed to see a successful code to understand how to do this
