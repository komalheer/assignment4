var hapi = require('hapi');
var joi = require('joi');

var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
server.route({
    method:'POST',
    path:'/login',
    config:{
        handler: (request, reply) => {
            reply('login successful');
        },
        validate: {
               payload: joi.object({
                 isGuest: joi.boolean().required(),
                username: joi.string().when('isGuest', { is: false, then: joi.required() }),
                password: joi.string().alphanum(),
                accessToken: joi.string().alphanum(),
                birthyear: joi.number().integer().min(1900).max(2013),
                email: joi.string().email()
           })
           .options({allowUnknown: true})
           .with('username', 'birthyear')
             .without('password', 'accessToken')
            }
    }
});
server.start((err) => {
    if (err) {
        throw err;
    }
});