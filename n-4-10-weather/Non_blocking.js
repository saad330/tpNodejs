
var fs = require('fs');
 
fs.readFile('./users','utf8', function(err,contents){
   console.log(contents);
});
console.log("Hello Node\n");
 
 
fs.readFile('./birth','utf8', function(err,contents){
   console.log(contents);
});
console.log("Hello again!");