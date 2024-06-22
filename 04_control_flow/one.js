//if 
// const isUserLoggedIn = true
// const temperature = 42;

// if(temperature === 41) {
//     console.log("temperature is good");
// }
// else{
//     console.log("temperature is not good");
// }

// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 700) {
//     console.log("less than 700");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("greater than 1000");
// }

const userLoggedIn = true;
const debitCard = true;
const userLoggedInGoogle = false;
const userLoggedInEmail = true;

if(userLoggedIn && debitCard) {
    console.log("Allow him to buy");
}
if(userLoggedInGoogle || userLoggedInEmail) {
    console.log("You are logged in");
}