var s = Symbol('zfpx');
console.log(s);


//消除魔术变量
var Opt ={
    add:Symbol(),
    minus:Symbol()
}

function calc(op,a,b){
    switch(op){
        case Opt.add:
            return a+b;
        break;
        case Opt.minus:
            return a-b;
        break
    }
}
console.log(calc(Opt.add,1,2));
console.log(calc(Opt.minus,5,4));