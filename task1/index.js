let list = document.getElementById("list");

let items = list.getElementsByTagName("li");

let texts = [];
for (let i = 0; i < items.length; i++) {
  texts.push(items[i].textContent);
}

let order = [0, 4, 1, 3, 2];

let result = [];
for (let i = 0; i < order.length; i++) {
  result.push(texts[order[i]]);
}

alert(result.join(", "));
