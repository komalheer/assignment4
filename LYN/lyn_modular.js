let filter= require('./lyn_module');
let pr=process.argv[2];
let pr1=process.argv[3];
filter(pr,pr1, function(e,file){
    if(e){
    return console.log(e);
    }
    file.forEach(function(display){
        console.log(display);
    })
})