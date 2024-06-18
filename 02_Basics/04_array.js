const tinderUser = {}

tinderUser.id = "12345"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Zakir",
            latName: "Hassan"
        }
        
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
