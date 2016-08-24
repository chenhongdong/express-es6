//1.from  将一个数组或类数组转成数组

/*
function sum(){
    /!*return Array.prototype.slice.call(arguments).reduce(function (curr,next) {
        return curr+next;
    },0)*!/

    return Array.from(arguments).reduce((curr,next)=> curr+next)
}

console.log(sum(1,2,3,4));*/

//2.Array.of    将数值转换为数组
console.log(Array(3));
console.log(Array.of(3));       //创建一个数组，默认值是3

//3.copyWithin      类似splice方法
console.log([1,2,3,4,5].copyWithin(1,2,4));     //1,3,4,4,5

//4.find和findIndex
var person = [
    {id:1,name:'宋东野'},
    {id:2,name:'黄渤'},
    {id:3,name:'逃跑计划'}
];

var right = person.find( (item,index,arr) => item.name=='宋东野');
console.log(right);
var index = person.findIndex((item,index,arr)=>item.name=='黄渤');
console.log(index);

