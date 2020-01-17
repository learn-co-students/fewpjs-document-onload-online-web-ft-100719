// Your code goes here
let p_tag = document.getElementById("text");

document.addEventListener("DOMContentLoaded", function() {
    p_tag.innerHTML = "This is really cool!";
});

console.log(
    "This console.log fires when index.js loads - before DOMContentLoaded is triggered"
);