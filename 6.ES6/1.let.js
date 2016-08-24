//{
//    let a = 1;
//}
//console.log(a); //error


for(let i=0;i<4;i++){
    setTimeout(function () {
       console.log(i)       //0,1,2,3
    },500)
}

{
    let a=0;
    //let a=1;
}

for(let i=0;i<2;i++){
    //console.log(i);     //i is not defined
    let i=100;
}