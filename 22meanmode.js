function MeanMode(arr) {
  var modeCount = {};                //object to hold numbers and their counts
  var mode;                          //creating a variable for future mode
  var mean;                          //creating a variable for future mean
  var sum = 0;                       //initialzing a sum count

  for ( var i = 0; i < arr.length; i++ ) { //cycling through the array of numbers
    sum += arr[i];                   //adding numbers together for the full sum
    modeCount[arr[i]] = modeCount[arr[i] || 0; //initialzing a key value pair or using the current one if we've seen the number before
    modeCount[arr[i]] += 1;          //adding for the count of the number
  }
  mean = sum/arr.length;             //calculating the mean value
  for( var key in modeCount ){       //looping through the modeCount
    if( modeCount[key] > count){     //check the number of times a number has been seen
      mode = parseInt(key);          //if its a new highest, convert the key back into a number and set it as the current mode
      count = modeCount[key];        //set a new high count
    }
  }
  return mode === mean;              //check to see if the mode and mean are equal
}