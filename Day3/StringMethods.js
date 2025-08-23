let data="Testleaf";
let charArray = ['T','E','S','T'];
console.log(`Substring without any index: ` + data.substring());//Entire letters will be printed as there is no index
console.log(`Substring without end index: ` + data.substring(1,));//Entire letters from the mentioned index will be printed as there is no end index
console.log(`Substring with both index: ` + data.substring(1,4));//Entire letters between the mentioned start index and end index will be printed
console.log(`Slicing without any index: ` + data.slice());//Entire letters will be printed as there is no index
console.log(`Slicing without end index: ` + data.slice(1));//Entire letters from the mentioned index will be printed as there is no end index
console.log(`Slicing with both index: ` + data.slice(1,4));//Entire letters between the mentioned start index and end index will be printed
console.log(`Slicing with negative index: ` + data.slice(-5,-1));// -1 will be started from the end and slice methods accepts -ve value
console.log(`Lower case: ` + data.toLowerCase());//To change all letters of the input data to lower case
console.log(`Upper case: ` + data.toUpperCase());//To change all letters of the input data to upper case
console.log(`Locale lower case: ` + data.toLocaleLowerCase());//To change all letters of the input data to local lower case
console.log(`To String: ` + data.toString());//To convert an object into string
console.log(`To String: ` + charArray.toString());//To convert an object into string
console.log(`Replace Method: ` + data.replace('e','ee'));//To replace a text in a string [replace(searchtext, replacetext)],it will replace only the first instance
console.log(`Replace Method: ` + data.replaceAll('e','ee'));//To replace a text in a string [replace(searchtext, replacetext)] in all instace

//We can also use regular expressions to remove only number,all the characters, expect characters and so on
//regular exp can be included without single quotes, Directly give the regex as the method parameter
let newString = "  1234TEstUSER$%^&  ";
console.log(`Replace Method With Regex - remove numbers : ` + newString.replaceAll(/[0-9]/g,''));//To remove numbers in the input data
console.log(`Replace Method With Regex - except numbers : ` + newString.replaceAll(/[^0-9]/g,''));//To remove all chars except leaving numbers in the input data, ^ acts as exception
console.log(`Replace Method With Regex - remove letters: ` + newString.replaceAll(/[a-z A-Z]/g,''));//To remove letters in the input data
console.log(`Replace Method With Regex - except letters: ` + newString.replaceAll(/[^a-z A-Z]/g,''));//To remove all chars except letters in the input data
console.log(`Replace Method With Regex - remove numbers, letters: ` + newString.replaceAll(/[0-9 a-z A-Z]/g,''));//To remove number, letters in the input data
console.log(`Trim Method: ` + newString.trim());//to remove empty space in the input data
console.log(`Trim Method: ` + newString.trimStart());//to remove empty space in the beginning of the input data
console.log(`Trim Method: ` + newString.trimEnd());//to remove empty space in the end of the input data
console.log(`Trim Method: ` + newString.includes('E'));//to check whether the included char,string exist in the input data, it will perform case sensitive search