function SimpleAdding(num) { 
  var sum = num;
  for (var i = 1; i < num; i++) {
    sum += i;
  }
  // code goes here  
  return sum; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(SimpleAdding(readline()));  