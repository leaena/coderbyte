function SimpleSymbols(str) { 
  var strs = str.split("");
  var letters = "abcdefghijklmnopqrstuvwxyz"
  for (var i = 0; i < strs.length; i++) {
    if (letters.indexOf(strs[i]) != -1 && (strs[i-1] != "+" || strs[i+1] != "+")) {
      return false;
    }
  }
  return true; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(SimpleSymbols(readline()));     