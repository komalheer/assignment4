let Hapi = require('hapi');
let H2o2 = require('h2o2');
let server = new Hapi.Server();
const pr=process.argv[2];
server.connection({
    host: 'localhost',
    port: Number(pr|| 8080)
});
server.register(H2o2, (err) => {
    if (err) {
    throw err;
    }
});
server.route({
    method:'GET',
    path:'/proxy',
    handler: {
        proxy: {
        host: '127.0.0.1',
        port: 65535
        }
    }
});
server.start((err) => {
    if (err) {
        throw err;
    }
});