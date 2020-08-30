# 学习笔记

## Array
特性：随机访问
内存管理器 —— 声明数组会在内存中开辟连续地址用于存储数组元素；
访问时间：O(1)
insert：O(n)
delete：O(n)

## Linked List
class定义：node {value, next}
单向链表
双向链表
循环链表
head节点

插入节点：O(1)
删除节点：前驱节点next指向后驱节点 O(1)

访问：O(n)

## Skip List
只能用于链表元素有序的情况
对标平衡树（AVL Tree）和二分查找
insert: O(log n)
delete: O(log n)
lookup: O(log n)

一维数据结构升维加速，空间换时间

实现：链表增加多级索引

空间复杂度：O(n)

工程应用：
LRU Cache缓存算法
Redis

# 实战练习
## 策略：
1. 5-10分钟：读、思考
2. 有思路 ? 写代码 : 看题解
3. 默写背诵
4. 闭卷自己写
5. 定期回顾

## 题目
1. MoveZeros
思路：
1. loop, count zeros,
2. 新数组, loop（不满足题目要求）
3. index, i遍历元素, j记录下一个0位置

2. container-with-most-water
思路：
1. 枚举：left bar x, right bar y, (x-y)*height_diff
O（n^2）
2. O(n)，左右夹逼，左右边界收敛

3. climb Stairs
归纳法
找最近重复子问题
1: 1
2: 1 or 2
3: 1 1 1 or 1 2 or 2 1
f(n) = f(n-1) + f(n-2)

4. 3sum
a+b+c=0 => a+b=-c
思路：
1. 暴力：三层循环
2. 双指针理论


## 栈
FILO
stack: 新进后厨
add: O(1)
delete: O(1)
lookup: O(n)

## 队列
FIFO
add: O(1)
delete: O(1)
lookup: O(n)

## 双端队列(Deque)
两端可以进出的queque
add: O(1)
delete: O(1)
lookup: O(n)

## Priority Queue
1. insert: O(1)
2. lookup: O(logn) 按照元素优先级取出
3. 底层数据结构多样复杂： heap、bst、treap