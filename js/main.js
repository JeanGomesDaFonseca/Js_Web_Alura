const form = document.getElementById("novoItem");
const list = document.getElementById("lists");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  createElement(
    e.target.elements["name"].value,
    e.target.elements["much"].value
  );
});

function createElement(name, much) {
  const newItem = document.createElement("li");
  newItem.classList.add("item");

  const numberItem = document.createElement("strong");
  numberItem.innerHTML = much;

  newItem.appendChild(numberItem);
  newItem.innerHTML += name;

  list.appendChild(newItem);
}
