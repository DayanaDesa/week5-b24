//Given a time in -hour AM/PM format, convert it to military (-hour) time.
//Note ; Midnight is on a -hour clock, and on a -hour clock. Noon is on a -hour clock, and on a -hour clock.
//Input format:
//A single string containing a time in -hour clock format (i.e: or), where 00 <= h <= 23 and 00 <= m <= 59.
//Output format:
//Convert and print the given time in -hour format, where.
//Sample input = Sample output
//07:05:45PM = 19:05:45 12:05:45AM = 00:05:45 12:05:45PM = 12:05:45


function translateMilitary(timeStr){
  
  if(timeStr.charAt(8) == "A"){
    if(timeStr.substring(0,2)=="12"){
      return "00"+timeStr.substring(2,8);
    }
    else{
      return timeStr.substring(0,8);
    }
    
  }
  else{
    if (timeStr.substring(0,2)=="12"){
      return timeStr.substring(0,8);
      
    }
    else{
      return (parseInt(timeStr.substring(0,2)) + 12) + timeStr.substring(2,8);
    }
    
  }
}

console.log(translateMilitary("07:45:45AM"));
console.log(translateMilitary("07:45:45PM"));
console.log(translateMilitary("12:45:45AM"));
console.log(translateMilitary("12:45:45PM"));
