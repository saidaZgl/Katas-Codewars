/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

//we want a split/substring everytime it == ' '  string.split([separator[, limit]])
//following a ' ' we want to toUpperCase the first character so .charAt(0)
//string.charAt(0).toUpperCase()
//capitalize the first word in every index of array
//then use .join(' ')
//return string with every first letter of word capitalized

let str = "How can mirrors be real if our eyes aren't real";
String.prototype.toJadenCase = function(string) {
  let removeSpaced = this.split(" "); // turns string into an array
  for (let i = 0; i < removeSpaced.length; i++) {
    // console.log(removeSpaced[i]);
    removeSpaced[i] =
      removeSpaced[i].charAt(0).toUpperCase() + removeSpaced[i].slice(1);
  }
  let jadenString = removeSpaced.join(" ");
  return jadenString;
};
str.toJadenCase();
//console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
