function LetterCapitalize(str) { 
  var words = str.split(" ");
  // code goes here
  for (var i = 0; i < words.length; i++) {
    var word = words[i].split("");
    word[0] = word[0].toUpperCase();
    words[i] = word.join("");
  }
  return words.join(" "); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LetterCapitalize(readline()));     