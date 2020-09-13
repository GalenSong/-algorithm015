/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = null
    const dfs = (root, p, q) => {
        if(root === null) return false
        let leftSub = dfs(root.left, p, q)
        let rightSub = dfs(root.right, p, q)
        if((leftSub && rightSub) || 
        ((root.val === p.val || root.val === q.val) && (leftSub || rightSub))) {
            res = root
        }
        return leftSub || rightSub || (root.val === p.val || root.val === q.val)
    }
    dfs(root, p, q)
    return res
};