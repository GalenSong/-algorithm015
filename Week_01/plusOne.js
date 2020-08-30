/**
 * 解题思路：按照整数加1的思路解题，从个位加起，逢10进1
 * 边界情况[9, 9, 9, 9]
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length - 1; i > -1; i--) {
        let currentNum = digits[i] + 1
        if(currentNum === 10) {
            digits[i] = 0
            if(i === 0) {
                digits = [1, ...digits]
                break
            }
        } else {
            digits[i] = currentNum
            break
        }
    }
    return digits
};