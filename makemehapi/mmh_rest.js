const hapi = require('hapi');
const server = new hapi.Server();
 const Vision = require('vision');
const Path = require('path');
const pr=process.argv[2];
server.connection({
    host: 'localhost',
    port: Number(pr || 8080)
});
server.register(Vision, (err) => {
    if (err) {
    throw err;
    }
});
server.views({
    engines:{
        html:require('handlebars')
    },
    path:Path.join(__dirname,'templates')
});
server.route({
    method:'GET',
    path:'/',
    handler: {
      view:'index.html'
    }
});
server.start((err) => {
    if (err) {
    throw err;
    }
});