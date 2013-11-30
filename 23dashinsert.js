function DashInsert(num) {
  var num = num.toString()                      //convert the number to a string
               .split("");                      //split the string into an array of characters
  var result = [];                              //create an empty array to hold our modified values
  for(var i = 0; i < num.length; i++) {         //loop through our number array
    result.push(num[i]);                        //add each number to our result array
    if(num[i] % 2 !== 0 && num[i+1] % 2 === 1){ //check to see if the current number and then next number are odd
      result.push("-");                         //push a dash if they are both odd so there is a dash between the two
    }
  }               
  return result.join("");                       //join the result array together into a string and return it        
}