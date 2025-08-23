let inputArray = ['A','B','C','D','E'];
//To delete an element at the end of the array
inputArray.pop();
console.log(inputArray);

//To add an element at the beginning of the array
inputArray.shift();
console.log(inputArray);

/* To remove an element at a particular position
First param indicates the index from which deletion starts
Second Index indicates count/number of data to be deleted from the start position mentioned in the first param*/
inputArray.splice(1,1);
console.log(inputArray);