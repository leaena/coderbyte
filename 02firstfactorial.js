function FirstFactorial(num) { 
  if(num === 1) {
    return 1;
  }
  // code goes here  
  return num * FirstFactorial(num-1); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(FirstFactorial(readline()));  