//So lost...

function ArrayAdditionI(arr) { 
  var result = false;
  var max = Math.max.apply({},arr);
  
  for(i=0; i<=arr.length; i++) {
    var sum = arr[i];
    for(n=0; n<=arr.length; n++) {
      if(n!==i) { sum+=arr[n] }
    
      if(sum === max) {
        result = true;
      }
    
      for(x=0; x<=arr.length; x++) {
        if( x!==i && (sum - arr[x]) == max) {
          result = true;
        }
      }
    }
  }
  
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(ArrayAdditionI([5,7,16,1,2]));    