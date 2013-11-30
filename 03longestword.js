function LongestWord(sen) { 
  var sentence = sen.split(" ")            //split the sentence into an array of words
                    .sort(function(a,b){   //sort the array with our own homebaked sort algorithm
    return b.replace(/[^a-zA-Z]/g, "").length - a.replace(/[^a-zA-Z]/g, "").length; //MAGIC!! *(see note below)
  });
  return sentence.shift(); //return the first value (first largest value) from our sorted list
}      

//NOTE ABOUT MAGIC:
//our sorting algorithm compares each position against the position next to it
//because we are only checking letters and not special characters, we use regex (for more study: http://regexone.com/) 
//to strip out the nonletters, we then compare lengths of each word to sort in a descending order (largest first)s                  