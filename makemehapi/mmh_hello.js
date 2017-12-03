const hapi=require('hapi');
const server = new hapi.Server();
const pr=process.argv[2];
server.connection( 
{
host: 'localhost',
port: Number(pr|| 8080)
});
server.route({
 method:'GET',
path:'/',
handler:(request, reply) => {
reply('Hello hapi');
    }
});

server.start((err) => {
    if (err) 
    console.log(err);
});