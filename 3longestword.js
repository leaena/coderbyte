function LongestWord(sen) { 
  var sentence = sen.split(" ");
  var word = "";
  var len = 0;
  // code goes here  
  for(var i = 0; i < sentence.length; i++) {
    var strip = sentence[i].replace(/[^a-zA-Z]/g, "");
    if (strip.length > len) {
      word = strip;
      len = strip.length;
    }
  }
  return word; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LongestWord(readline()));                            