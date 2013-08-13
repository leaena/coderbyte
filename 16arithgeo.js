function ArithGeo(arr) { 
  if ((arr[1] - arr[0]) === (arr[arr.length-1] - arr[arr.length-2])) {
    return "Arithmetic";
  } else if ((arr[1] / arr[0]) === (arr[arr.length-1] / arr[arr.length-2])) {
    return "Geometric";
  } else { 
    return "-1"; 
  }      
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(ArithGeo(readline()));  