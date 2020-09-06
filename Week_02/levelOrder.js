/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // 该方法不适用于用数组作为基础数据结构的树
    let result = [] // 用于存放层级节点
    function traverse_node(node, level) {
        // result的长度等于level时，需要添加数组存储当前层级的元素
        if(result.length === level) {
            result.push([])
        }
        //将当前层级元素的值存入数组中
        result[level].push(node.val)
        // 遍历子树
        for(child of node.children) {
            traverse_node(child, level + 1)
        }
    }

    if(root !== null) {
        traverse_node(root, 0)
    }

    return result
};