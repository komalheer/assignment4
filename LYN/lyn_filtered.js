let fs=require('fs');
let pr=process.argv[2];
let ext='.'+process.argv[3];
fs.readdir(pr,'utf8',function(err,data){
    if(err){
       return console.error(err);
    }
data.forEach(function(list){
   if(require('path').extname(list)==ext) {
       console.log(list);
   }
    
})  ;  

});