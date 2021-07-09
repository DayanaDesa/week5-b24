var arrays = [2,4,6,10,12,16,19,21,30];
var numberToSearch = 23;

function verifyNumber(arrays, numberToSearch){
  for (var i = 0; i < arrays.length; i++){
    if (numberToSearch == arrays [i]){
      return true;
    }
  }
  return false;
}

console.log(verifyNumber([2,4,6,10,12,16,19,21,30], 21));
