/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let leftPointer = 0,
        rightPointer = nums.length - 1,
        result = [];
    while(leftPointer <= rightPointer) {
        if(nums[leftPointer] ** 2 > nums[rightPointer] ** 2) {
            result.unshift(nums[leftPointer] ** 2);
            leftPointer++;
        } else {
            result.unshift(nums[rightPointer] ** 2);
            rightPointer--;
        }
    }
    return result;
};