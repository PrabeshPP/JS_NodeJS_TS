//! Path in-built module

const { Console } = require('console');
const path=require('path');

//It will print the separator in my system
console.log(path.sep);

const filePath=path.join('Dummy','dymmy1.1','dummy.txt');

console.log(filePath);

//To extract the BasePath only

const base=path.basename(filePath);

console.log(base);

//To resolve the path from the root

const absolute=path.resolve(__dirname,'Dymmy','dymmy1.1','dummy.txt');
console.log(absolute);