//not quite working...

function ArithGeo(arr) { 
  
  // code goes here
  if (arr[1] - arr[0] === arr[arr.length-2] - arr[arr.length-1]) {
    return "Arithmetic";
  }
  if (arr[1] % arr[0] === arr[arr.length-2] % arr[arr.length-1]) {
    return "Geometric";
  }
  return "-1";         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(ArithGeo(readline()));   