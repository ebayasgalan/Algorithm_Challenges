/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 || x === 1) return x;
    let counter = 2;
    while(true) {
        if(counter * counter > x) break;
        counter++;
    }
    return counter -1;
};