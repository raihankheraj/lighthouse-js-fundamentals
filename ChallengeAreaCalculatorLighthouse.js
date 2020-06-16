const calculateRectangleArea = function (length, width){
  
  if ((length <= 0) || (width <= 0)){
    return undefined;
  }else {
    var recArea = length * width;
  }
  return recArea;
}


const calculateTriangleArea = function (base, height){
  
  if ((base <= 0) || (height <= 0)){
    return undefined;
  }else {
    var triArea = ((base * height) / 2);
  }
  return triArea;
}

const calculateCircleArea = function (radius){
  if (radius <= 0){
    return undefined;
  }else{
    
    var rsquared = radius * radius;
    var circArea = Math.PI * rsquared;
  }
  return circArea;
}