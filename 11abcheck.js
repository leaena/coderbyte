function ABCheck(str) { 
  // code goes here 
  for(var i = 0; i < str.length; i++){
    if (str[i] == "a") {
      if (str[i+4] == "b") {
        return true;
      }
    }
  }
  return false;        
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(ABCheck(readline()));   