// var c = 300;
let a = 400;

if(true) {
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Zakk"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if(true) {
    const username = "Zakir"
    if(username === "Zakir") {
        const website = "youtube"

        console.log(username + website);
    }
}