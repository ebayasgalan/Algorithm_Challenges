/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const numString = x + '';
    let start = 0, end = numString.length - 1; 
    while(start < end) {
        if(numString[start] !== numString[end]) return false;
        start++;
        end--;
    }
    return true;
};