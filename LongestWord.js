
function largestWord(str){
  var max = 0;
  var strArray = str.split(" "); // transform a string into an array
  
  for (var i = 0; i < strArray.length; i++){
    if (strArray[i].length > max){
      max = strArray[i].length;
    }
    
  }
  
  return max;
}

console.log(largestWord("The quick brown fox jumped over the lazy dog"));
