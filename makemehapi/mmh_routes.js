const hapi = require('hapi');
const server = new hapi.Server();
const pr=process.argv[2];
server.connection({
    host: 'localhost',
    port: Number(pr|| 8080)
});
server.route({
    method: 'GET',
    path: '/{name}',
    handler: function(request,reply) {
    reply('Hello'+ encodeURIComponent(request.params.name));
    }
});
server.start(function error(){
    if (error)
    console.log(error);
});