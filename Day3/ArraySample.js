/*In JS Array - Collection of similar/different datatypes and size is dynamic
*/
let employeeNames = ['Emp1', 'Emp2', 'Emp3', true, 1234, null];
console.log(employeeNames);//To print entire array
console.log(employeeNames[0]);//To print data in particular index of array
console.log(employeeNames[6]);//when we give not exisitng index, it will allocate the space for data in that index and returns undefined output
employeeNames[6] = "Test6";
console.log(employeeNames);//To print entire array
employeeNames[1] = "Test1";//Since we used the index with existing data, old data will be replaced by new data
console.log(employeeNames);//To print entire array
console.log(employeeNames.length);//to find the length of an array

//Add or delete operations
employeeNames.push('new data'); //To add an element in the end of an array
console.log(employeeNames);
employeeNames.unshift('1'); //To add an element in the beginning of an array
console.log(employeeNames);
employeeNames.splice(1, 0, 'spliceData');//To add an element in particular position by removing a data in specific position
//for the above code, 'spliceData' will be added after index position 1
//second param : 0 indicates no element need to be deleted, if 1 data will be deleted in the array
console.log(employeeNames);
employeeNames.pop();//To remove last data in an array
console.log(employeeNames);