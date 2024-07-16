let button = document.getElementById("btn"); // accessing the button by its id  
button.addEventListener("click", () =>{  // adding an event listener to the button  
 document.querySelector(".box").innerHTML = "I have been changed"  // changing the innerHTML of the box  
})