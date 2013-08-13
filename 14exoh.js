function ExOh(str) { 
  var Xs = 0;
  var Os = 0;
  // code goes here
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "x") {
      Xs++;
    } else if (str[i] == "o") {
      Os++;
    }
  }
  return Xs == Os; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(ExOh(readline()));  