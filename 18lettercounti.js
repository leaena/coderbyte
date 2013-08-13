function LetterCountI(str) { 
  var words = str.split(" ");
  var count = 0;
  var word = "";
  // code goes here
  for (var i = 0; i < words.length; i++) {
    var wordx = words[i];
    var sum = 0;
    for (var j = 0; j < words[i].length; j++) {  
      var letter = wordx[j];
      for (var k = 0; k < wordx.length; k++) {
        if ((j != k) && (letter === wordx[k])){
          sum += 1;
        }
      }
    }
    if (sum > count) {
        count = sum;
        word = wordx;
    }
  }
  if (count > 0) {
    return word;
  } else{
    return "-1";
  }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LetterCountI(readline()));    