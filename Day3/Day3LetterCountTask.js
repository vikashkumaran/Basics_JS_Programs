let data = "testleaf"; //input data
let count = 0; //variable used for counting
let dataArray = data.split(""); //string is converted in array
let reverseData = '';//String to store the reverse data
//For loop to reverse the string
for(let i=dataArray.length;i>=0;i--){
reverseData+=data.charAt(i);//
}
console.log("Reverse String " + reverseData);
//For loop to count the letter
for(let i=0;i<dataArray.length;i++){
if(dataArray[i]==='e'){
    count++;
}
}
console.log(`count of e is ${count}`);