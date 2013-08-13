function DivisionStringified(num1,num2) { 
  var number = parseInt(num1/num2);
  var thousands = parseInt(number/1000);
  var hundreds = number % 1000;
  // code goes here
  if (thousands > 0) {
    return thousands.toString() + "," + hundreds.toString();
  } else {
    return hundreds.toString();
  }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(DivisionStringified(readline())); 