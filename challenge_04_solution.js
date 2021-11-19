function controlCar(scanArray) {
  var carLeft = scanArray.slice(0,7);
  var carRight = scanArray.slice(10,17);
  
  var max = scanArray[0];
  
  for (var i = 1; i < scanArray.length; i++) {
    if(max < scanArray[i] {
       max = scanArray[i];
    }
  }
  
  var leftCount = 0;
  var rightCount = 0;
  
  for (var i = 0; i < carRight.length; i++) {
    if (carRight[i] == max) {
      rightCount += 1;
    }
  }
    
  for (var i = 0; i < carLeft.length; i++) {
    if (carLeft[i] == max) {
      leftCount += 1;
    }
  }
   
  if (leftCount > 0) {
     return -1;
  }

  if (rightCount > 0) {
     return 1;
  }

  return 0;   
}
