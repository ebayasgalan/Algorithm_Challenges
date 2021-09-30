/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1)
};

const binarySearch = (arr, target, start, end) => {
    if(start > end) return start;
    let mid = start + Math.floor((end - start) / 2);
    if(arr[mid] === target) return mid;
    if(arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
    if(arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
}