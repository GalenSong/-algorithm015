学习笔记
## 递归
终结条件
当前逻辑处理
进入下一层
清理当前层

function recur(level, param) {

    // terminator
    if(level > MAX_LEVEL) {
        //process result
        return
    }

    //process current logic
    process(level, param)

    // drill down
    recur(level: level+1, newParam)

    // restore current status
}

思维要点：
1. 不要进行人肉递归
2. 寻找最近最简方法，将其拆解成可重复解决的问题（重复子问题）
3. 数学归纳法思维

## 分治
大问题拆解成小问题

function divide_conquer(problem, param1, param2, ...) {
    if(problem === null) {
        print_result
        return
    }

    data = perpare_data(problem)
    subproblems = split_problem(problem, data)

    subresult1 = this.divide_conquer(subproblems[0], p1, ...)
    subresult2 = this.divide_conquer(subproblems[1], p1, ...)
    subresult3 = this.divide_conquer(subproblems[2], p1, ...)

    result = process_result(subresult1, subresult2, subresult3, ...)
}

## 回溯
