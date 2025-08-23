let targetNumber = 5;
let finalSum = 0;
sumEachNumbers(targetNumber);
function sumEachNumbers(targetNumber){
for(let i=0;i<=targetNumber;i++){
finalSum = finalSum + i;
}
console.log(`Sum of number until ${targetNumber} :` + finalSum);
}