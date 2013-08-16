function SwapCase(str) { 
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = lower.toUpperCase();
  var result = [];
  for(var i = 0; i < str.length; i++) {
    if(upper.indexOf(str[i]) != -1){
      result.push(str[i].toLowerCase());
    } else if(lower.indexOf(str[i]) != -1){
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i]);
    }
  }

  return result.join(""); 
         
}