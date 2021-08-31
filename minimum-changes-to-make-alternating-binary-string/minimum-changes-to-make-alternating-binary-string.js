/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let count1 = 0, count2 = 0
    let expected = '0'
    for (let i = 0; i < s.length; i++) {
       if (s[i] !== expected) 
           count1++
       expected = expected === '0' ? '1' : '0'
    }
    expected = '1'
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== expected) 
            count2++
        expected = expected === '0' ? '1' : '0'
    }
    return Math.min(count1, count2)
};