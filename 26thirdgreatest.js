function ThirdGreatest(strArr) { 
  strArr.sort(function(a,b){   //sort the array with our own homebaked sort algorithm that sorts from largest to smallest
    return b.replace(/[^a-zA-Z]/g, "").length - a.replace(/[^a-zA-Z]/g, "").length; //MAGIC!! *(see note from #3 LongestWord)
  });
  return strArr[2]; //returns the third value in the array, which is the 3rd largest when we sorted in decending order above       
}