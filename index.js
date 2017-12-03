const hapi = require('hapi');
const joi=require('joi');
const firebase = require('firebase');
var firebaseDB = firebase.initializeApp({
  apiKey: "AIzaSyCt8jMHmi20cyJhL9L7RRwZW706_fPv7bI",
  authDomain: "project-62fe6.firebaseapp.com",
  databaseURL: "https://project-62fe6.firebaseio.com",
  projectId: "project-62fe6",
  storageBucket: "project-62fe6.appspot.com",
  messagingSenderId: "1005946041133"
})

const database = firebaseDB.database()
const server = new hapi.Server({ port: 3000, host: 'localhost' });
server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    return('hello hapi')
}
  })
server.route({
  method:'GET',
  path:'/books/{id}',
  handler(request,reply){
    let book={};
  const id=  firebase.database().ref('books').child('id');
    if(request.params.id==id){
      return firebase.database().ref('books').child('id').once('value').then(function(snapshot) {
    return (snapshot.val());
  })

}}
});
server.route({
		method: 'GET',
	    path: '/books/',
	    handler: function (request, response) {
	        return firebase.database().ref('books').once('value').then(function(snapshot) {
			  return (snapshot.val());
			});
	},
});



server.route({
method:'POST',
path:'/books/',
/*config:{
  validate:{
    payload:{
      title: joi.string().required(),
      author: joi.string().required(),
      id: joi.number().required(),
      genre: joi.string().required(),
      isIssued: joi.boolean().required(),
      issuedTo: joi.string().when('isIssued', { is: true, then: joi.required() }),
      date: joi.date().iso().required(),
      publisher: joi.string().required(),
    }
  }
},*/
handler(request,reply){
  firebase.database().ref(`books/${request.payload.id}`).set(request.payload);
  return(request.payload);
}
});
server.route({
method:'PUT',
path:'/books/',
/*config:{
  validate:{
    payload:{
      title: joi.string().required(),
      author: joi.string().required(),
      id: joi.number().required(),
      genre: joi.string().required(),
      isIssued: joi.boolean().required(),
      issuedTo: joi.string().when('isIssued', { is: true, then: joi.required() }),
      date: joi.date().iso().required(),
      publisher: joi.string().required(),
    }
  }
},*/
handler(request,reply){
  firebase.database().ref(`books/${request.payload.id}`).set(request.payload);
  return(request.payload);
}
});
server.route({
  method:'DELETE',
  path:'/books/',
  handler(request,reply){
      firebase.database().ref(`books/${request.payload.id}`).remove();
  }
})

server.start((err) => {
  if (err) {
    throw err
  }
})
