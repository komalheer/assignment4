let fs=require('fs');
let pr=process.argv[2];

let print=fs.readFileSync(pr);
let str=print.toString();
let print1=str.split('\n').length-1;
console.log(print1);
