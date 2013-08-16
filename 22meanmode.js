function MeanMode(arr) {
  var mode;
  var modeCount = [];
  var count = 0;
  var sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(!modeCount[arr[i]-1]){
      modeCount[arr[i]-1] = 0;
    }
    modeCount[arr[i]-1] += 1;
  }
  for(i = 0; i < modeCount.length; i++) {
    if(modeCount[i] > count) {
      mode = i+1;
      count = modeCount[i];
    }
  }
  var mean = sum/arr.length;
  if (mean === mode) {
    return 1;
  } else {
    return 0;
  }     
}