
const joi = require('joi');
const pr=process.argv[2];
const hapi = require('hapi');
const server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(pr || 8080)
});
server.route({
    method: 'GET',
    path:'/chickens/{breed}',
    config:{
        handler(request,reply){
        return('The Chicken breed is'+ request.params.breed);
        },
        validate: {
            params: {
                breed:joi.string().required()
        }
    }
}
});

server.start((err) => {
    if (err) {
        throw err;
    }
});