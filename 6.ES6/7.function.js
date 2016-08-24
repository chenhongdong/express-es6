//剩余操作符
/*
let rest = function(a,...b){
    console.log(a,b)
};

rest(1,2,3);        //1,[2,3]


function sum(prefix,...values){
    return prefix+values.reduce(function (curr,next) {
            return curr+next;
        },0)
}

console.log(sum('￥',1,2,3,4) )*/

//箭头函数
var inp = [3,2,1];
//var out = inp.map(item=>item*2);
//console.log(out);       //[2,4,6]

//inp.sort((a,b)=>a-b);
/*inp.sort((a,b)=>{
    console.log('a-b');
    return a-b;
})
console.log(inp);*/

var person = {
    name:'斑马，斑马',
    fn: function () {
        setTimeout(()=> {
            console.log(this.name)
        },500)
    }
}

person.fn()

