// 2703. Return Length of Arguments Passed

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.


function arguments(...args){
  return args.length
}
var args = [3,4]
console.log(arguments(...args))