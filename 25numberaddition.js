function NumberAddition(str) { 
  var numbers = str.replace(/[^0-9]/g, " ") //replace everything but letters with spaces
                   .split(" ");             //split numbers into an array of numbers by the spaces we inserted
  var sum = 0;                              //a starting point to sum the numbers

  for( var i = 0; i < numbers.length; i++){ //simple for loop through all the number values
    numbers[i] && (sum += parseInt(numbers[i]));   //short hand check that numbers[i] exists, then convert strings to number values
  }
  return sum;                                   
}
