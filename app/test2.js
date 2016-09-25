export function capitalise(names){
  var results = [];
  for(var i=0;i<names.length;i++)
  {
    results.push(names[i].toUpperCase());
  }
  return results;
}

export function extractValue(objects, key) {
  var results = [];
  for (var i=0;i<objects.length;i++){
    		 results. push(objects[i][key]);
    }
    return results;
 }

export function extractCompoundValue(objects, keysString) {
  var results = [];
  var attributes= keysString.split(/[ .]+/);
  for (var i=0;i<objects.length;i++){
    		 results. push(objects[i][attributes[0]][attributes[1]]);
    }
    return results;

}
