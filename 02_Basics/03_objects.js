//singleton

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Zakir",
    [mySym]: "mykey1",
    age: 30,
    email: "zakir@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

JsUser.email = "zakk@amazon.com"
console.log(JsUser.email);

JsUser.greetings = function() {
    console.log("Hello All");
}
// console.log(JsUser.greetings());

JsUser.greetings2 = function() {
    console.log(`Hello ${this.name} Wats up !`);
}

console.log(JsUser.greetings2());