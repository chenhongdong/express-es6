/*
 let name = '庄心妍';
 let songs = '不要在我的伤口撒盐';
 let getName = function () {
 console.log(this.name,this.songs);
 };

 let person = {
 name,
 songs,
 getName
 };

 person.getName()*/

//console.log(NaN==NaN);          //false
//console.log(Object.is(NaN,NaN));        //对比两个值是否相等  true

/*var one = {name:'张靓颖'};
var two = {songs:'我相信'};
var obj = {};

Object.assign(obj,one,two);     //把多个对象的属性复制到对象中
console.log(obj);*/

var obj1 = {name:'我们的时光'};
var obj2 = {name:'南方姑娘'};
var obj = {};

Object.setPrototypeOf(obj,obj1);
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));

//__proto__     直接在对象字面量上设置原型__proto__
var obj3 ={
    __proto__:obj2
}
console.log(obj3.name);


//super  调用prototype上的属性或方法
//父级
let person = {
    eat(){
        return '牛奶'
    }
};
//子集
let student = {
    __proto__:person,
    eat(){
        return super.eat()+'+咖啡';
    }
};
console.log(student.eat())