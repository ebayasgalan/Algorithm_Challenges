/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    return function(n) {
        let low = 0,
        high = n;
        while(low < high) {
            let middle = low + Math.floor((high - low) / 2);
            if(isBadVersion(middle)) {
                high = middle;
            } else {
                low = middle + 1;
            }
        }
        return low;
    };
};