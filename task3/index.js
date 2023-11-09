let body = document.body;

let mainElement = document.createElement("main");
mainElement.className = "mainClass check item";

let divElement = document.createElement("div");
divElement.id = "myDiv";

let paragraphElement = document.createElement("p")
paragraphElement.textContent = "First paragraph";

body.appendChild(mainElement);

mainElement.appendChild(divElement);

divElement.appendChild(paragraphElement);