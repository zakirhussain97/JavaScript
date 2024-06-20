const user = {
    username: "Zakir",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
}

// user.welcomeMessage()
// user.username = "Zakk"
// user.welcomeMessage()

// function one() {
//     const username = "Zakir"
//     console.log(this.username);
//     // console.log(this);
// }
// one()

// const one = function() {
//     const username = "Zakir"
//     console.log(this.username);
// }
// one()

// const one =() => {
//     const username = "Zakir"
//     console.log(this);
// }

// one()

// const num = (num1, num2) => {
//     return num1 + num2
// }

const num = (num1, num2) => (num1 + num2)
console.log(num(3,5));