/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.length) return -1;
    let pivot, 
        left = 0, 
        right = nums.length - 1;
    while(left <= right) {
        pivot = left + Math.floor((right - left) / 2);
        if (nums[pivot] === target) return pivot;
        if (target < nums[pivot]) right = pivot - 1;
        else left = pivot + 1;
    }
    return -1;
};