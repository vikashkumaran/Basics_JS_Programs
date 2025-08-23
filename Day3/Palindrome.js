let data = "madam";
let reversedData = "";
reversedData = data.split('').reverse().join('');
console.log(reversedData)
if(reversedData == data){
console.log(`${reversedData} is a palindrome`)
}else{
console.log(`${reversedData} is not a palindrome`)
}
