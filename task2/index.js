document.querySelector("h1").style.backgroundColor = "#99ee00";

let myDivContainer = document.getElementById("myDiv");
let styleParams = [ 
  "font-weight: bold;",
  "color: red;",
  "text-decoration: underline;",
  "font-style: italic;"
];
  
styleParams.forEach((item, index)=>{
  myDivContainer.children[index].style = item;
});

let myList = document.getElementById("myList");
myList.style = "display: flex; list-style: none";

document.querySelector("span").hidden = true;