export function filterNames(names, startsWith){
var results = [];
for(var i=0;i<names.length;i++)
  {
  if(names[i].substring(0,startsWith.length,startsWith)== startsWith)
    {
      results.push(names[i]);
    }
  }
  return results;
}


export function objectFilter(objects,key,searchString) {
  var results = [];
  for (var i=0;i<objects.length;i++){
    	if(objects[i][key]==searchString)
    		{
    		 results. push(objects[i]);
    		}
  }
  return results;
}

export function compoundObjectFilter(objects, keysString, searchString) {
var results = [];
for (var i=0;i<objects.length;i++){
  var attributes= keysString.split(/[ .]+/);
  	if(objects[i][attributes[0]] [attributes[1]] == searchString)
  		{
  		 results. push(objects[i]);
  		}
  }
  return results;
}
