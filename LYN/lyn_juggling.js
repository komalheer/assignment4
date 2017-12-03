let h=require("http");
let bl=require("bl");
let result=[];
let count=0;
function print() 
{
    for (let i=0;i<3;i++)
{
    console.log(result[i]);
}
}
function get (i) {
h.get(process.argv[2 + i], function (res)
    {
res.pipe(bl(function (e,data)
{
    if(e) {
        return console.log(e);
}
    result[i]=data.toString();
    count++;
    if (count===3) 
    {
        print();
    }
}));
});
}
    for(let i=0;i<3;i++)
{
    get(i);
}