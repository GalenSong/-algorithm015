/**
 * 实现思路1：
 * 设置一个空头节点；
 * 交替循环遍历两个有序链表；
 * 将两个链表中当前分别指向的节点进行比较，并通过pre节点记录较小的节点，并将较小的节点指向其下一节点继续比较
 **/ 


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let prehead = new ListNode(null)

    let pre = prehead

    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            pre.next = l1
            l1 = l1.next
        } else {
            pre.next = l2
            l2 = l2.next
        }
        pre = pre.next
    }
    pre.next = l1 === null ? l2 : l1

    return prehead.next
};
