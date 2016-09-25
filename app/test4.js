export default function getPrimes(max){
var results = [];
for(var i=2;i<max;i++)
{
  var isprime = true;
  for(var j=0;j<results.length;j++){
    var p = results[j];
    if(i%p==0) // if its divisible by another prime therefore its not a prime
    {
      isprime=false;
      break;
    }
    if(p*p>i)
    break;
  }
  if(isprime)
  {
    results.push(i);
  }
}
return results;
}
