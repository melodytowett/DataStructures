
// "Given an array of integers, find the sum of its elements.

// For example, if the array , , so return .

// Function Description

// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

// simpleArraySum has the following parameter(s):

// ar: an array of integers
// Input Format

// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers representing the array's elements.

// Constraints
// Output Format
// Print the sum of the array's elements as a single intege"



//Pseudo Code
//Define  a variable with an array of numbers
// initialize a variable  to store sum which is zero before thesummations starts
// then Loop through the array adding each element
//sum the index of the array with the sum defined before looping through
// Print your sum in the console. 
var nums = [1,2,3,4,5,6]
var sum = 0;
for (let i =0;i< nums.length;i++){
  sum += nums[i]
}
console.log(sum)