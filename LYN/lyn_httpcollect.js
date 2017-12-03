let h=require("http");
let bl = require("bl");
let pr=process.argv[2];
h.get(pr, function(res) {
  res.pipe(bl(function (e,list) {
if (e) {
return console.log(e);
  
}
list=list.toString();
console.log(list.length);
console.log(list);
  }));
});