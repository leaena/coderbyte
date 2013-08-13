function SecondGreatLow(arr) { 
  var unique = [arr[0]];
  for(var i = 1; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) == -1) {
      unique.push(arr[i]);
    }
  }
  unique.sort(function(a,b){return a - b});
  var smallest = unique[1].toString();
  unique.reverse();
  var largest = unique[1].toString();
  // code goes here  
  return smallest + " " + largest; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(SecondGreatLow(readline())); 