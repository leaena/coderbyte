function SwapCase(str) { 
  var result = [];                              //our results array to hold transformed values
  for(var i = 0; i < str.length; i++) {         //for loop to look through the whole string
    if(str[i] === str[i].toUpperCase()){        //check to see if the character is uppercase
      result.push(str[i].toLowerCase());        //if so, make it lowercase and add it to results array
    } else if(str[i] === str[i].toLowerCase()){ //check to see if the character is lowercase
      result.push(str[i].toUpperCase());        //if so, make it upperrcase and add it to results array
    } else {
      result.push(str[i]);                      //default case for nonalpha characters
    }
  }
  return result.join("");                       //join the array back into a string and return it       
}