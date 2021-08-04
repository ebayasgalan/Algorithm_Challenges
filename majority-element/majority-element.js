/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const list = {};
    let max = 0;
    let result = 0;
    nums.forEach(num => {
      // create new property 
      if(!list[num]) {
        list[num] = 1;
      } else {
      // increment property 
        list[num]++;
      }
    })
    const entries = Object.entries(list);
    for(let [key, value] of entries) {
      if(value > max) {
        max = value;
        result = +key;
      }
    }
    return result;
};