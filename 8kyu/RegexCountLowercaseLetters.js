// DESCRIPTION:
// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

//My Solution

function lowercaseCount(str){
    let numOfLowerCase = 0;  
    
    for( const char of str){
      if(char.match(/[a-z]/)){
        numOfLowerCase += 1;
      }
    }
    return numOfLowerCase;
  }