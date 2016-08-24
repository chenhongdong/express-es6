/*let name='弦子',music='无可取代';
let desc = `${name}演唱的${music}`;
console.log(desc);

var str = `<ul>
<li>不爱最大</li>
<li>I DO</li>
</ul>`;
console.log(str);*/

//带标签的模板字符串
let name='弦子',music='无可取代',album='不爱最大';
function desc(strings,...values){
    console.log(strings,values);
    
    var str='';
    for(var i=0;i<values.length;i++){
        str+=strings[i]+values[i];
    }
    str+=strings[i];
    console.log(str)
}
desc`${name}的${music}出自专辑${album}`;
