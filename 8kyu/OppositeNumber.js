// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

//My Solution

function opposite(number) {
  
    if(number > 0 || number < 0 ){
      return -number;
    }else{
      return 0;
    }
  }