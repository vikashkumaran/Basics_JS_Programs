//Declared functions
function add(a,b){
return a+b;
}
console.log(add(5,4));

//Anonymous Function or Function expression -> Function without name
let browser = function (){
    console.log("Anonymous function is called")
}
browser();
browser;

//Aynschronous function => Functions will be executed parallelly/simultaneously
function subtract(a,b){
    setTimeout(() => {
  console.log("Waitied for 2 seconds!");
}, 2000);
return a-b;
}
console.log(subtract(5,4));