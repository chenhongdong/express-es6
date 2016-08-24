var arr = [1,10,2,7,26,17];

console.log(Math.max.apply(null,arr));//以前的做法

console.log(Math.max(...arr));      //展开操作符，把数组直接传入


function max(){
    console.log(Math.max(...arguments))
}

max(2,13,11,9,22)


let print = function (a,b,c) {
    console.log(a,b,c)
};

print(...[12,13,14]);
