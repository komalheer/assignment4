let fs=require('fs');
let pr=process.argv[2];
fs.readFile(pr,'utf8',function(err,data){
    if(err){
       return console.error(err);
    }
   let print=data.split('\n').length-1;
   console.log(print);
});