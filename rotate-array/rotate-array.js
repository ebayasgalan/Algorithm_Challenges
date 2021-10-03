/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const swap = (arr, startIndex, endIndex) => {
        while(startIndex <= endIndex) {
            const temp = arr[startIndex];
            arr[startIndex] = arr[endIndex];
            arr[endIndex] = temp;
            startIndex++;
            endIndex--;
        }
    }
    k = k % nums.length;
    swap(nums, 0, nums.length - 1);
    swap(nums, 0, k - 1);
    swap(nums, k, nums.length - 1);
};