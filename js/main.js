const form = document.getElementById("novoItem");
const list = document.getElementById("lists");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((e) => {
  createElement(e);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements["name"];
  const much = e.target.elements["much"];

  const currentItem = {
    name: name.value,
    much: much.value,
  };

  createElement(currentItem);

  itens.push(currentItem);

  localStorage.setItem("itens", JSON.stringify(itens));

  name.value = "";
  much.value = "";
});

function createElement(item) {
  const newItem = document.createElement("li");
  newItem.classList.add("item");

  const numberItem = document.createElement("strong");
  numberItem.innerHTML = item.much;
  newItem.appendChild(numberItem);

  newItem.innerHTML += item.name;

  list.appendChild(newItem);
}
