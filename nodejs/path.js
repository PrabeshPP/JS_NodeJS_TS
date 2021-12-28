const path=require('path');
// it returns the a line with dir path
console.log(path.dirname("C:/Users/prabe/OneDrive/Desktop/JavaScript/nodejs/path.js"));
// it returns type of file,in this case it returs js(java script)
console.log(path.extname('C:/Users/prabe/OneDrive/Desktop/JavaScript/nodejs/path.js'));
// it returns the file name
console.log(path.basename('C:/Users/prabe/OneDrive/Desktop/JavaScript/nodejs/path.js'));
// it parse the path into several pieces
const mypath=path.parse('C:/Users/prabe/OneDrive/Desktop/JavaScript/nodejs/path.js');
console.log(mypath.base);
