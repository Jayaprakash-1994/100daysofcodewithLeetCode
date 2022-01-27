/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
//[-2,1,-3,4,-1,2,1,-5,4]
 var maxSubArray = function(nums) {
     if(nums.length == 1){
         return nums[0];
     }
    var result = [];
    for(let i=0; i< nums.length;i++){
        var current = nums[i];
        result.push(current);
        for(let j=i+1; j< nums.length;j++){
            current = current + nums[j];
            result.push(current);
        }
    }
    return result.sort(function(a,b) {return a-b}).at(-1);
    
};