let array1 = [6,1,2,11,12,13,3,4,5];
let array2 = [1,2,3,4,5,6,7,8,9,10];
function intersection(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j] && !result.includes(array1[i])) {
        result.push(array1[i]);
      }
    }
  }

  return result;
}
console.log(intersection(array1, array2));