function FirstReverse(str) { 
  return str.split("")  //splits the string into an array of characters
            .reverse()  //reverses the array
            .join("");  //joins the array back into a string, with no space between the characters      
}                      
