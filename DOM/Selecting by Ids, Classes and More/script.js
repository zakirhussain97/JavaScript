// console.log("Hello World !");

// let boxes = document.getElementsByClassName("box"); // returns an array
// console.log(boxes);

// boxes[2].style.backgroundColor = "red" // changes the color of the 3rd box

// document.getElementById("red").style.backgroundColor = "red" // changes the color of the red box

// document.querySelector(".box").style.backgroundColor = "green" // changes the color of the first box

document.querySelectorAll(".box").forEach((e) => {
  // loops through all the boxes and changes the color of all the boxes
  e.style.backgroundColor = "green";
});
