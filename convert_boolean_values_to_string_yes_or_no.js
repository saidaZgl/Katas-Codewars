/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false
*/

/* Ma 1ère solution */
function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

/* Ma 2ème solution */
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
