let duplicateArray = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 'A', 'C', 'A', 'Apple', 'Apple'];
for (let i = 0; i < duplicateArray.length; i++) { //for loop To iterate each element in the input array
    for (let j = i + 1; j < duplicateArray.length; j++) { //for loop To iterate each element with other elements
        if (duplicateArray[i] === duplicateArray[j]) // If condition to check duplicate data
            console.log(`Duplicated Data : ` + duplicateArray[i]);
    }
}