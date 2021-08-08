/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let startPointer = 0, 
       endPointer = 0, 
       result = 0, 
       set = new Set();
    while(endPointer < s.length) {
        if(!set.has(s[endPointer])) {
            set.add(s[endPointer]);
            result = Math.max(result, (endPointer - startPointer) + 1)
            endPointer++;
        } else {
            set.delete(s[startPointer]);
            startPointer++;
        }
    }
    return result;
};