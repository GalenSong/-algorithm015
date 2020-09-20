/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(function(a,b){
        return a-b;
    })
    s.sort(function(a,b){
        return a-b;
    })
    let i = 0, j = 0
    while(i < g.length && j < s.length) {
        if(g[i]<=s[j]) {
            i++
        }
        j++
    }
    return i
};