/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

//Search Insert Position; I would Say this is Very Average Approach.
var searchInsert = function(nums, target) {
    for(let index=0;index < nums.length; index++){
        //Straight Forward. If its Matching return the Index Postion.
        if(nums[index] === target){
            return index;
        }
        // Not Matching with any index Values and Loop about to end.
        else if(nums.length-1 === index){
            for(let k=0;k < nums.length;k++){
                if( nums[k] < target &&  nums[k+1] > target) {
                    return k+1;
                }
                if( nums[k] > target ) {
                    // Less than all values
                    if(k-1 === -1){
                        return 0;
                    }
                    //Insert in Middle. Just Before Current Index.
                    else{
                    return k-1;
                    }
                }
                else if(nums[k+1] === undefined){
                    return k+1;
                }
            }
        }
    }
    
};