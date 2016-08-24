let str = 'hello';

console.log(str.includes('he'));

console.log(str.startsWith('h'));//以什么为开头

console.log(str.endsWith('o'));     //以什么结尾

let str2 = 'world';
//第2个参数表示开始搜索的位置
console.log(str2.includes('w',1));  //false
console.log(str2.startsWith('o',1)) //true  从索引为1开始搜索，正好从o开始
console.log(str2.endsWith('l',4));  //true  从后向前找
