function LetterChanges(str) { 
  var vowels = "aeiou";
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var shifted = str.split("");
  var str = "";
  // code goes here  
  for(var i = 0; i < shifted.length; i++) {
    if (shifted[i] == "z"){
      str += "A";
    } else if (alpha.indexOf(shifted[i].toLowerCase()) != -1) {
      if (vowels.indexOf(alpha[alpha.indexOf(shifted[i].toLowerCase()) + 1]) != -1){
        str += alpha[alpha.indexOf(shifted[i].toLowerCase()) + 1].toUpperCase();
      } else {
        str += alpha[alpha.indexOf(shifted[i].toLowerCase()) + 1];
      } 
    } else {
      str += shifted[i];
    }
  }
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LetterChanges(readline()));     