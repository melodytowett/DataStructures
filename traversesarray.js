//LINEAR SEARCH
// Traverse the array using a for loop.
// In every iteration, compare the target value with the current value of the array.
// If the values match, return the current index of the array.
// If the values do not match, move on to the next array element.
// If no match is found, return -1.
// To search the number 5 in the array given below, linear search will go step by step in a sequential order starting from the first element in the given array.
//[1,8,2,3,4,5,6,8]
//Pseudo code
let nums = [1,8,2,3,5,4,6,8];
let target = 5;
for(let i = 0; i<nums.length;i++){
  if (nums[i] == target) {
    console.log(i);
  }
}
return -1;

//Time complexity
//The first loop is O(n)the if loop is inside the for loop so O(n*n)= O(n2)
//O(n2)
