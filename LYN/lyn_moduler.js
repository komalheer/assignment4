let fs=require("fs");
let path=require("path");
module.exports=function(direct,filter,callback){
    
    fs.readdir(direct,function(e,list){
       if(e){
           return callback(e)
        
       } 
       list = list.filter(function (file) {
return path.extname(file)=='.'+filter;
})
callback(null, list);
    })
}