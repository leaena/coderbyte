function MeanMode(arr) {
  var mode;
  var modeCount = [];
  var count;
  var sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    modeCount[arr[i]] += 1;
  }
  count = 0;
  for(i = 0; i < arr.length; i++) {
    if(arr[i] > count) {
      mode = i;
    }
  }
  var mean = sum/arr.length; 
  if (mean === mode) {
    return 1;
  } else {
    return 0;
  }     
}