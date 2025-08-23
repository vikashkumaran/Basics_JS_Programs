let inputArray = ['A','B','C','D','E'];
//To add an element at the end of the array
inputArray.push('F');
console.log(inputArray)

//To add an element at the beginning of the array
inputArray.unshift('F');
console.log(inputArray)

/* To add an element at a particular position
First param indicates the index from which deletion starts
Second Index indicates count/number of data to be deleted from the start position mentioned in the first param
Third Index indicates the data to be inserted*/
inputArray.splice(0,0,'F');//To insert a new data at the beginning of array
console.log(inputArray);
inputArray.splice(0,2,'F');//To remove first 2 elements and then add new data in that position
console.log(inputArray);
inputArray.splice(inputArray.length,-2,'F');//Delete count cannot be negative, JS treats this negative value as 0 so new element will be added at the end of array
console.log(inputArray);
inputArray.splice(inputArray.length, 0,'F','G');//To add 2 elements at the end
console.log(inputArray);
inputArray.splice(-2, 2,'F','G');//To remove last 2 elements at the end and add a new data
console.log(inputArray);