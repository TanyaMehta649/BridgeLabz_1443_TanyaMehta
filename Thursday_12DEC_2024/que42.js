//Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
 
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    

    return distance <= r1 + r2 && distance >= Math.abs(r1 - r2);
  }
  
  
  console.log(areCirclesIntersecting(0, 0, 5, 3, 4, 3)); 
  
  