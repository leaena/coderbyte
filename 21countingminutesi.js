function CountingMinutesI(str) { 
  var times = str.split("-");
  var time1 = times[0].slice(0,times[0].length-2).split(":");
  var time1ap = times[0][times[0].length-2];
  var time2 = times[1].slice(0,times[1].length-2).split(":");
  var time2ap = times[1][times[1].length-2];
  var time1min = parseInt(time1[0]) * 60 + parseInt(time1[1]);
  var time2min = parseInt(time2[0]) * 60 + parseInt(time2[1]);
  
  if (time1ap === "p" && time1[0] !== "12") {
    time1min += 12 * 60;
  }
  if (time2ap === "p" && time2[0] !== "12") {
    time2min += 12 * 60;
  }
  
  if (time1ap === "a" && time1[0] === "12") {
    time1min -= (12 * 60);
  }
  if (time2ap === "a" && time2[0] === "12") {
    time2min -= (12 * 60);
  }
  
  if (time1min > time2min) {
    return ((24 * 60) - time1min) + time2min;
  } else {
    return time2min - time1min;
  }
         
}