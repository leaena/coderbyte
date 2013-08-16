function DashInsert(num) {
  var num = num.toString().split("");
  var result = [];
  for(var i = 0; i < num.length; i++) {
    result.push(num[i]);
    if (num[i] % 2 !== 0){
      if (num[i+1] % 2 === 1){
        result.push("-");
      }
    }
  }
                  
  return result.join("");        
}