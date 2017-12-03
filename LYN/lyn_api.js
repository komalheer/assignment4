let pr=process.argv[2];
let h=require("http");
let url=require("url");
function ptime(time){
    return{
        hours:time.getHours(),
        minutes:time.getMinutes(),
        seconds:time.getSeconds()
}
}
function utime(time){

return{
  utime:time.gettime()}
}
let server=h.createServer(function(request,response){
  
let parseurl=url.parse(request.url,true);
let time=new Date(parseurl.query.iso);
let result;
if (/^\/api\/parsetime/.test(request.url)){
 result=ptime(time);
}else if(/^\/api\/utime/.test(request.url))
{
 
 response.writeHead(200,{'Content-Type':'application/json'});
 response.end(JSON.stringify(result)); 
}else
{
response.writeHead(404);
response.end();  
}
});
server.listen(Number(pr));