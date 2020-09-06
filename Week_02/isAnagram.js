/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false
    }
    let table = Array(26).fill(0)
    let aCode = "a".codePointAt(0)
    for(let i = 0; i<s.length; i++) {
        table[s.codePointAt(i) - aCode]++
    }
    for(let i = 0; i<t.length; i++) {
        table[t.codePointAt(i)-aCode]--
        if(table[t.codePointAt(i) - aCode] < 0) {
            return false
        }
    }
    return true
};