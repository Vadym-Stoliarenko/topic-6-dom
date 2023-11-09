const inputForm = document.querySelectorAll(".arr");
const btn = document.querySelector(".btn");
const outBlock = document.querySelector(".out");

btn.onclick = function() {
  outBlock.innerHTML = " ";
  
  inputForm.forEach((element) => {
    outBlock.innerHTML += ` ${element.getAttribute("data-form")} : ${element.value} <br />`;
  });
}