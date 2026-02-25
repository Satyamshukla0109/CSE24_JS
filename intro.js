var num=null;
console.log(num);
console.log(typeof(num));
num=false;

const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("true");

}
else{
    console.log("false")
}

var count;
document.write("Starting loop"+"</br>");
for(count=0;count<10;count++){
    document.write(count+"</br>");
}
