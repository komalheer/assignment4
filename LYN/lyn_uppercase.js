let h=require('http');
let map=require('through2-map');
let pr=process.argv[2];

let create=h.createServer(function (request, outstream)
{
  if(request.method!=='POST')
  {
    return outstream.end('Use post method for request')
  }

  request.pipe(map(function(convert)
  {
      return convert.toString().toUpperCase();
  })).pipe(outstream)
})
create.listen(Number(pr));