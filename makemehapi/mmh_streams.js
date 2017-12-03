const Fs = require('fs');
const hapi = require('hapi');
const Path = require('path');
const Rot13 = require('rot13-transform');
const pr=process.argv[2];
const server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(pr|| 8080)
});
server.route({
    method: 'GET',
    path: '/',
    config: {
        handler(request, reply){
    let thisfile=Fs.createReadStream(Path.join(__dirname,'file.txt'));
    return(thisfile.pipe(Rot13()));
        }
    }
});
server.start((err) => {
    if (err) {
        throw err;
}
    
});