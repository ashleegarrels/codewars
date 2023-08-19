// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


//My Solution

function doubleChar(str) {
    let newStr = str.split('');
    let doubleStr = newStr.map(i => i += i).join('');
    return doubleStr;
  }