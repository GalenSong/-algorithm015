/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // 用于存放钱柜中5元和10元的数量
    let five = 0, ten = 0
    for(bill of bills) {
        if(bill === 5) { // 如果顾客付了5美元，则不用找零
            five++
        } else if(bill === 10) { // 如果顾客付了10美元，需要找零5美元
            if(five === 0) return false
            five--
            ten++
        } else { // 如果顾客付了20美元，需要找零15美元，组合为[10, 5] 或 [5, 5, 5]
            if(five > 0 && ten > 0) {
                five--
                ten--
            } else if(five >= 3) {
                five -= 3
            } else {
                return false
            }
        }
    }
    return true
};