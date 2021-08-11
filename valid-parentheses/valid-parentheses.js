/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for(let char of s) {
        // if it's opening parentheses, add to stack 
        if(char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if(map[stack.pop()] !== char) {
            // if it's closing parentheses, compare it to the last value of stack 
            return false
        }
    }
    // if stack is empty, it is a valid parentheses 
    return stack.length === 0;
};