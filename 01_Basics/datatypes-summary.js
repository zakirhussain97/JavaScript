// Primitive DataTypes
// 7 types
/*
String
Number
Boolean 
Null
Undefined
Symbol
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3245678899065n

//Non Premitive Datatypes

/*
Array
Object
Functions
*/

const heroes = ["Spiderman", "Thor", "Ironman"]

let obj = {
    name: "Zakk",
    age: 30
}

const myFunction = function() {
    console.log("Hello World")
}

console.log(typeof heroes
)

//*************Memory***********//

//Stack Memory(Primitive)
//Heap Memory(Non Premitive)

let myName = "Zakir"
let anotherName = myName
anotherName = "Parrey"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hassan@google.com"

console.log(userOne.email);
console.log(userTwo.email);