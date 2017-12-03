let h=require('http');
let pr=process.argv[2];
h.get(pr, function(res)
{
res.setEncoding('utf8');
res.on('data',console.log);
res.on('error',console.error);
}).on('error',console.error);