export default function test3(numMax){

var number= parseInt(numMax);
  var x=0;
  var y=1;
  var z;

  var fib = [];
  if(numMax==[])
    return [];
  else  if(numMax==[1])
      fib[0]=x;
else  if(numMax==[2])
{
    fib[0]=x;
    fib[1]=y;
  }
    else if(numMax>[2]){
  for(var i=2;i<number;i++)
  {
    fib[0]=0;
      fib[1]=1;
    fib[i]=x+y;
    z=x+y;
    x=y;
    y=z;
  }
}
  return fib;
  }
