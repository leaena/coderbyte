function NumberAddition(str) { 
  var numbers = [];
  var nums = "0123456789";
  var sum = 0;
  for (var i = 0; i < str.length; i++){
    if (nums.indexOf(str[i]) !== -1){
        var num = [];
        num.push(str[i]);
      for (var j = i+1; j < str.length; j++){
        if (nums.indexOf(str[j]) !== -1){
          num.push(str[j]);
        } else {
          i = j;
          j = str.length;
        }
      }
    numbers.push(num.join(""));
    }

  }
  console.log(numbers);
  for (var k = 0; k < numbers.length; k++){
    sum += parseInt(numbers[k]);
  }
  // code goes here  
  return sum; 
         
}