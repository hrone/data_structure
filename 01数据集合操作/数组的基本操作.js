//数组是用于构造数组的全局对象，数组是类似于列表的高阶对象。

//创建一个数组  femaleStar
let names=['范冰冰','刘亦菲','秦海璐','张靓颖'];

//通过索引访问数组中的元素,[0]表示数组的第一项，names.length-1表示最后一项
console.log(names[0]);
console.log(names[names.length - 1]);
//如果超出数组的长度 返回undefined  表示找不到
console.log(names[names.length]);


/*
   push 添加元素到数组的末尾
   返回值是数组的长度，改变原数组
 */
let result1= names.push('章子怡');
console.log('----------18----------');
console.log(result1);
console.log(names);

/*
    pop 删除数组的最后一项
   返回值是删除数组的元素，改变原数组
 */
let result2=names.pop();
console.log('----------26----------');
console.log(result2);
console.log(names);

/*
    shift 删除数组的第一项
   返回值是删除数组的元素，改变原数组
 */
let result3=names.shift();
console.log('----------36----------');
console.log(result3);
console.log(names);

/*
    unshift 向数组的第一项添加一项元素
   返回值是当前数组的元素，改变原数组
 */
let result4=names.unshift('周迅');
console.log('----------46----------');
console.log(result4);
console.log(names);

/*
    indexOf 找出某个元素在数组中的索引
   返回值是当第一个找到的索引，如果没找到返回-1
 */
let result5=names.indexOf('刘菲');
console.log('----------54----------');
console.log(result5);

/*
    splice 接收三个参数
    参数 1  索引
    参数 2  个数
    参数 3  内容
    表示从参数索引开始 删除多少个，同时追加内容，功能强大可删除可添加
    返回值是修改后的数组，修改原数组，
 */
//删除第3项
let result6=names.splice(2,1);
console.log('----------64----------');
console.log(result6);
console.log(names);
//向第三项前面添加一项  0表示一项都不删除 返回空数组
let result7=names.splice(2,0,'张惠妹');
console.log('----------72----------');
console.log(result7);
console.log(names);
//数组清空
let result8=names.splice(0);
console.log('----------77----------');
console.log(result8);
console.log(names);

names=['范冰冰','刘亦菲','秦海璐','张靓颖'];

/*
    slice
    截取：表示从当前索引开始 截取几个
    不修改原数组
 */

let result9=names.slice(0,2);
console.log('----------86----------');
console.log(result9);
console.log(names);