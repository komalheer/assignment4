let h=require('http');
let fs=require('fs');
let pr=process.argv[2];
let pr1=process.argv[3];
let server=h.createServer(function(request, response)
{
    response.writeHead(200, {'content-type':'text/plain'}
);
    fs.createReadStream(pr1).pipe(response);
});
server.listen(Number(pr));