function VowelCount(str) { 
  var vowels = "aeiouAEIOU";
  var count = 0;
  // code goes here 
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) != -1) {
      count += 1;
    }
  }
  return count;       
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(VowelCount(readline())); 