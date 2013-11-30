//welcome to recursion! 
//recursion is simply calling a function from within itself to rerun the function
//it's like a complex for loop a lot of the time, but is also super useful for binary searchs

function FirstFactorial(num) { 
  if( num === 1 ) { //recursion needs a base case, otherwise it will go on forever 
    return 1;       //if num is ever 1 we break out of the recursion
  } 
  return num * FirstFactorial(num-1); //recursion magic! for factorials (num!) the answer is num * num-1 ... * 1 
}                                     //so we need to call FirstFactorial on all the numbers below num and collect the results       

