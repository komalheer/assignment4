var joi = require('joi')
module.exports = [
  {
    path: '/books',
    method: 'POST',
    handler: function (request, reply) {
      var book={
        title: request.payload.title,
        author: request.payload.author,
        isbn: request.payload.isbn,
        genre: request.payload.genre,
        publication: {
          date: request.payload.date.toString(),
          publisher: request.payload.publisher
	}
      }
      db.createBook(book)
      reply(request.payload)
    },
    config: {
      validate: {
        payload: {
          title: joi.string().required(),
          author: joi.string().required(),
          isbn: joi.number().required(),
          genre: joi.string().required(),
          date: joi.date().iso().required(),
          publisher: joi.string().required()
        }
      }
    }
  },
  {
    path: '/books',
    method: 'GET',
    handler: function (request, reply) {
      db.getBooks(function (value) {
        reply(value)
      })
    }
  },
  {
    path:'/books/',
    method:'GET',
    handler:function(request,reply){
      db.deleteBooks(function(value){
        reply(value)
      })
    }
  },
]
