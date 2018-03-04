/*
    去重
   有数组 var arr = ['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0]，
   请用 JavaScript 实现去重函数 unqiue，使得 unique(arr) 返回 ['a', 'b', 'c', '1', 0, 1, '']
*/

let  arr = ['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0];

//立即就能想到的解法
function unqiue(arr) {
    let ret=[],len=arr.length;
    for(let i=0;i<len;i++){
        if (ret.indexOf(arr[i])===-1){
            ret.push(arr[i]);
        }
    }
    return ret;
}

console.log(unqiue(arr));
//在 IE6-8 下，数组的 indexOf 方法还不存在;所以需要修改，太麻烦 就不列举了，我们进行优化
function unique1(arr) {
    let ret = []
    let hash = {}

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        let key = typeof(item) + item
        if (hash[key] !== 1) {
            ret.push(item)
            hash[key] = 1
        }
    }

    return ret
}

/*
核心是构建了一个 hash 对象来替代 indexOf. 注意在 JavaScript 里，对象的键值只能是字符串，
因此需要 let key = typeof(item) + item 来区分数值 1 和字符串 '1' 等情况。

但优化真的很容易带来坑，比如上面的实现，对下面这种输入就无法判断：

unique1([ new String(1), new Number(1) ])
可以继续修改代码，做到性能和正确性都很好。但往往，这带来的结果并不好。*/
