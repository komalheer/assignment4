let hapi = require('hapi');
let inert = require('inert');
let path = require('path');
let pr=process.argv[2];
let server = new hapi.Server({
    connections: {
    routes: {
    files: {
    relativeTo: __dirname
    }
}
}
});
server.connection({
    host: 'localhost',
    port: Number(pr|| 8080)
});
server.register(inert, function error() {
    if (error) 
    console.log(error);
});
server.route({
    method:'GET',
    path:'/',
    handler: {
        file:path.join(__dirname, 'index.html')
    }
});
server.start(function error() {
    if (error) 
    console.log(error);
});