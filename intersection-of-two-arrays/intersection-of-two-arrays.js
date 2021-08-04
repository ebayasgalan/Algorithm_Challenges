/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const uniqueList = new Set();
  let longer = [];
  let shorter = [];
    if(nums1.length <= nums2.length) {
      longer = nums2;
      shorter = nums1;
    } else {
      longer = nums1;
      shorter = nums2;
    }
  for(let val of shorter) {
    if(longer.includes(val)) {
      uniqueList.add(val);
    }
  }
  const result = [...uniqueList];
  return result;
};