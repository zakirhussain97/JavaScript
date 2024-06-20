// Immediately Invoked Function Expressions (IIFE)


(function data(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Zakir')
