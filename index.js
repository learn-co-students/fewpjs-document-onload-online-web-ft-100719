document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    document.getElementById("text").textContent = 'This is really cool!'
  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

//   let element = document.getElementById("text");
//   element.textContent = 'This is really cool!'
// document.getElementById("text").textContent = 'This is really cool!'