const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "Ruby",
};

for (const key in myObject) {
  //console.log(`${key} is shortcut for ${myObject}`);
}

const programming = ["js", "java", "py", "c#"]
for (const key in programming) {
    console.log(programming[key]);
}
