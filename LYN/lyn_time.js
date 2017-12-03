let net=require('net');
let pr=process.argv[2];
function zerofill(i) {
  
    if(i<10)
    {
      return'0'+i;
    }
  else
  {
    return i;
  }
}
function time()
{
    let date= new Date();
    return date.getFullYear()+'-'+
    zerofill(date.getMonth()+ 1)+'-'+
    zerofill(date.getDate())+' '+
    zerofill(date.getHours())+':'+
    zerofill(date.getMinutes())
}

let create=net.createServer(function(socket) 
{
    socket.end(time()+'\n')
})
create.listen(Number(pr));