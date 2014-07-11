var prompt = require('sync-prompt);
var chalk = require('chalk');

var weight = prompt('How many pounds do you weight?');
var gender = prompt('Are you (f)emale or (m)ale?');

weight = parseInt(weight);
var foods = []
var total = 0
