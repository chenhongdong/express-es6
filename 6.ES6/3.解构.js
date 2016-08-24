//数组的解构赋值
var arr = ['天涯海角','海南',['海天盛筵','天上人间']];

/*var [name,addr,[pos1,pos2]] = arr;
console.log(name,addr,pos1,pos2);*/

var [,addr] = arr;
//console.log(addr);

//对象的解构赋值
/*
var obj = {a:'肯德基',b:'麦当劳'};
var {a,b} = obj;
console.log(a,b)
var {a:kfc,b:mcd} = obj;
console.log(kfc,mcd)*/

//如果木有给值，就从默认值里找
//let [a,b,c="C+"] = [1,2,3];
//console.log(a,b,c);

/*let [x,[y],z] = [1,[2.1,2.2]];
console.log(x,y,z);     //1,2.1,undefined*/

/*
let [x,[y,z]] = [1,[2.1,2.2]];
console.log(x,y,z);     //1,2.1,2.2*/

//解构参数对象
function ajax({method='GET',url=new Error('必须输入url')}){
    console.log(method,url)
}

ajax({})