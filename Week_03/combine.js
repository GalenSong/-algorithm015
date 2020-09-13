/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = []
    const dfs = (current, n, k, temp) => {
        if(temp.length + (n - current + 1) < k) {
            return
        }

        if(temp.length === k) {
            res.push(temp)
            return
        }

        dfs(current + 1, n, k, [...temp, current])

        dfs(current + 1, n, k, temp)
    }
    dfs(1, n, k, [])
    return res
};