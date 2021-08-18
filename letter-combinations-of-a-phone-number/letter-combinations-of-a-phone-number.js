/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    var phoneDigitsToLetters = {
        0: '0',
        1: '1',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
      };
    //   make end result 
    const words = [];
    if(!digits.length) return words;
    // create recursive function args:(word, digitArray)
    const wordsFinder = (word, digitArray) => {
        // base case: 
        // if digitArray is empty, push to word 
        // stop 
        if(!digitArray.length) return words.push(word);
        //   get current digit 
        const digit = digitArray[0];
        //   get current letters 
        const letters = phoneDigitsToLetters[digit].split('');
        //   iterate over every letter 
        for(let letter of letters) {
            // add letter to word and recurse 
            wordsFinder(word + letter, digitArray.slice(1));
        }
    };
    // invoke recursive function 
    wordsFinder('', digits.split(''));
    // return end result 
    return words;
}