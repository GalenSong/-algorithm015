/**
 * 实现思路1：
 * 从nums最后一项开始循环遍历nums，通过pops取出每一项（同一个数不能重复使用）；
 * 通过target - nums[i]得到另一个数，并在数组中查找是否存在该数；
 * 时间复杂度：O(n^2)
 **/ 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length
    let result = []
    for(let i = len - 1; i > -1; i--) {
        let firstNum = nums.pop()
        let differ = target - firstNum
        let secondNumIndex = nums.indexOf(differ)
        if(secondNumIndex > -1) {
            result[1] = i
            result[0] = secondNumIndex
            break
        }
    }
    return result
};

/**
 * 实现思路1：
 * 遍历nums
 * 通过target - nums[i]得到另一个数，将该数存入Map中，key为该数，value为下标，每次遍历判断map中是否存在该数，若存在则返回下标；
 * 时间复杂度：O(n)
 **/ 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map
    for(let i = 0; i < nums.length; i++) {
        let differ = target - nums[i]
        if(map.has(differ)) {
            return [map.get(differ), i]
        }
        map.set(nums[i], i)
    }
    
    throw new Error('look up failed')
};