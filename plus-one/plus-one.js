/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let lastIndex = digits.length - 1;
    while (lastIndex >= 0) {
        if (digits[lastIndex] === 9) {
            if (lastIndex === 0) {
                digits[lastIndex] = 0;
                digits.unshift(1);
            } else {
                digits[lastIndex] = 0;
            }
            lastIndex--;
        } else {
            digits[lastIndex]++;
            return digits;
        }
    }

    return digits;
};