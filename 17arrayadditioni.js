function ArrayAdditionI(arr) { 
  arr.sort(function(a,b){return a - b})
  var largest = arr.pop();
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
    for (var j = 0; j < arr.length; j++){
      if (i != j) {
        sum += arr[j];
        if (sum == largest) {
          return true;
        }
      }
    }
    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        sum -= arr[k];
        if (sum == largest) {
          return true;
        }
      }
    }
    sum = 0;
  }
  // code goes here  
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(ArrayAdditionI(readline()));                   