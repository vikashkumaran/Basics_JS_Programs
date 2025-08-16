/*
Name: HomeAssignment1.js
Author: Vikash Kumaran
Created: 2025-08-16
Last Modified: 2025-08-16

Description: In this example, we can understand the different primitive data types in java script
Data Types of JS:
1. Primitive Data Types: String,Number,Boolean,BigInt,undefinied,null,symbol
2. Non-Primitive Data Types: object,Array,Function,Date,Regular expression,Map,Set,WeakMap,WeakSet
3. Primitive data types are immutable, Non-Primitive Data Types are mutable

Var vs let:
1. Redeclaration: "var" allows redeclaration, "let" does not allows redeclaration
2. Reassignments: both "var" & "let" allows reassignments; last assigned data will replace the exist data of the variable
3. Scope: "var" has global/function level scoping, "let" has block level scoping
4. Memory Management: "var" occupies memory longer due to longer life time, "let" is more memory efficient in block-heavy code

undefined vs Not Defined:
1. undefined: variable declaration is completed but value is not assigned
2.Not defined: variable declaration is not completed
 */
var carModel = "mahindra"
var makeYear = 2025
let isAutomatic = true
let registrationNumber
let chasisNumber = 1122334455667788n
const carprice = 1500000
const priceType = '$'
const currencyUnit = Symbol("USD")
const carWeight = 1000.50
var ownerName = null
console.log(carModel + " " + typeof (carModel))
console.log(makeYear + " " + typeof (makeYear))
console.log(isAutomatic + " " + typeof (isAutomatic))
console.log(`chasisNumber: ${chasisNumber} ${typeof (chasisNumber)}`)
console.log(`carWeight: ${carWeight} ${typeof (carWeight)}`)
console.log(carprice + " " + typeof (carprice))
console.log(priceType + " " + typeof (priceType))
console.log(currencyUnit.toString() + " " + typeof (currencyUnit))
console.log(ownerName + " " + typeof (ownerName))
console.log(registrationNumber + " " + typeof (registrationNumber))