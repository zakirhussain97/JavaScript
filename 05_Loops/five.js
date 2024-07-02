const coding = ["js", "ruby", "py", "cpp"];
// coding.forEach(function (val) {
//   console.log(val);
// });

//by arrow function
coding.forEach( (item) => {
console.log(item);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )