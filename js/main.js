const form = document.getElementById("novoItem");
const list = document.getElementById("lists");
const itens = []

form.addEventListener("submit", (e) => {
  e.preventDefault();
const name = e.target.elements["name"];
  const much = e.target.elements["much"];
  
  
  createElement(
    name.value = "",
    much.value = ""
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

  const itemAtual ={
    "nome": name,
    "quantidade": much
  }
  itens.push(itemAtual)

  localStorage.setItem("item", JSON.stringify(itens))
}
