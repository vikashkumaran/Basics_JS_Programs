/*
Name: Length of Last word
Author: Vikash Kumaran
Created: 2025-08-28
Last Modified: 2025-08-28
 */
let inputString = " Hello World 1234 ";
let wordsArray = inputString.trim().split(" ");
console.log(wordsArray)
console.log((wordsArray[wordsArray.length-1]).length); //To print the count of last word in the given sentence

/*
Name: given Words are anagram or not
Author: Vikash Kumaran
Created: 2025-08-28
Last Modified: 2025-08-28
 */
let inputString1 = "listen";
let inputString2 = "Silent";
function isAnagram(inputString1, inputString2){
inputString1 = inputString1.replace(/\s+/g, '').toLowerCase();//unwanted empty spaces are removed, letters are converted to lower case 
inputString2 = inputString2.replace(/\s+/g, '').toLowerCase();//unwanted empty spaces are removed, letters are converted to lower case
Word1 = inputString1.split('').sort().join('');//word is splitted in characters, sorted in alphabetical order and characters are joined back to form the string back
Word2 = inputString2.split('').sort().join('');//word is splitted in characters, sorted in alphabetical order and characters are joined back to form the string back
if(Word1===Word2){//2 words are compared to identify whether the lenth and string are same
    console.log(inputString1 + " and " + inputString2 + " is an anagram");
}else{
    console.log(inputString1 + " and " + inputString2 +  " is not an anagram");
}
}
isAnagram(inputString1, inputString2);