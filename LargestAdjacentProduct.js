//Given an array if integers, find the pair of adjacent element that has the largest product and return that product.
//Example
// For inputArray = [3,6,-2,-5,7,3], the output should be adjacentElementsProduct(inputArray) = 21. 7 and 3 produce the largest product.

function largestAdjacentProduct(array){
  var max = array[0] * array[1] ;
  for (var i = 0; i < array.length; i++){
    if (array[i] * array[i+1] > max){
      max = array[i] * array[i+1];
    }
    
  }
  
  
  return max;
}

console.log(largestAdjacentProduct([3,6,-2,-5,7,3]));

