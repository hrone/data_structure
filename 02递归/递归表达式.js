//递归：函数通过名字调用自身

//递归阶乘函数

function factorial(num) {
    if(num<=1){
        return 1
    }else {
        return num*factorial(num-1);
    }
}
let result =factorial(5);
console.log(result);

/*
  递归的缺点：如果递归函数的终止条件不明确或者缺少终止条件会导致函数长时间运行，
  使用户界面处于假死状态。值得注意的是：浏览器对递归的支持熟练与JS调用栈大小直接相关，
  当使用太多递归甚至超过最大调用栈容量时，浏览器会报错误信息，各个浏览器对报错的提示信息也不一样。
*/