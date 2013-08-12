function TimeConvert(num) { 
  var minutes = num % 60;
  var hours = parseInt(num/60);
  return "" + hours + ":" + minutes; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(TimeConvert(readline()));   