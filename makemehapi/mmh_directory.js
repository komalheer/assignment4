let hapi = require('hapi');
let inert = require('inert');
let path = require('path');
let pr=process.argv[2];
let server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(pr||8080)
});
server.register(inert, function error() {
    if (error) 
    console.log(error);
});
server.route({
    method:'GET',
   path:'/foo/bar/baz/{filename}',
    handler: {
        directory: {
        path:path.join(__dirname,'public')}
    }
});
server.start(function error() {
    if (error) 
    console.log(error);
});