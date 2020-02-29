/*
Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

// function doTest(a, n) {
//   console.log("A = ", a);
//   console.log("n = ", n);
//   Test.assertEquals(findOdd(a), n);
// }
// Test.describe('Example tests', function() {
//   doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//   doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//   doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//   doTest([10], 10);
//   doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//   doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
// });

//intial thoughts -
// loop through array to fill a temporary counter var tempNum
// count each instance of tempNum
// if the occurance of tempNum % 2 !== 0, return tempNum,
// need a way to increase the comparision number  <- done
//tempNum isn't increasing correctly during the first conditional <- false
// isnt' looping through array before it incrases compareNum

// console.log('\ni = ' + [i]);
// console.log('A[compareNum] = ' + A[compareNum]);
// console.log('number compared to = ' + A[i]);
// console.log('tempNum = ' + tempNum);
// console.log('tempNum % 2: ' + tempNum % 2);

function findOdd(A) {
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    // var count = 0;
    for (var j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return A[i];
    }
  }
  count = 0;
}

// findOdd([1,2,2,1,2]);
findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
