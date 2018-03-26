/*
    斐波那契数列，又称为黄金分割数列。指的是这样一个数列：1、1、2、3、5、8、13、....，
    在数学上，斐波那契数列以递归的方法定义：F(0)=1,F(1)=1,F(n) = F(n-1)+F(n-2);
 */

function f1(num) {
    if(num===0||num===1){
        return 1;
    }
    return f1(num-1)+f1(num-2)
}

let r1=f1(7);
console.log(r1);