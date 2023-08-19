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

  const houver = itens.find((event) => event.name === name.value);

  const currentItem = {
    name: name.value,
    much: much.value,
  };

  // "if & else" refatorado usando ternario

  houver
    ? ((currentItem.id = houver.id),
      updateElement(currentItem),
      (itens[houver.find((element) => element.id === houver.id)] = currentItem))
    : ((currentItem.id = itens[itens.length - 1]
        ? itens[itens.length - 1].id + 1
        : 0),
      createElement(currentItem),
      itens.push(currentItem));

  // if (houver) {
  //   currentItem.id = houver.id;

  //   updateElement(currentItem);

  //   itens[houver.id] = currentItem;
  // } else {
  //   currentItem.id = itens.length;

  //   createElement(currentItem);

  //   itens.push(currentItem);
  // }

  localStorage.setItem("itens", JSON.stringify(itens));

  name.value = "";
  much.value = "";
});

function createElement(item) {
  const newItem = document.createElement("li");
  newItem.classList.add("item");

  const numberItem = document.createElement("strong");
  numberItem.innerHTML = item.much;
  numberItem.dataset.id = item.id;
  newItem.appendChild(numberItem);

  newItem.innerHTML += item.name;

  newItem.appendChild(buttonDelete(item.id));

  list.appendChild(newItem);
}

function updateElement(item) {
  document.querySelector("[data-id='" + item.id + "']").innerHTML = item.much;
}

function buttonDelete(id) {
  const elementButton = document.createElement("button");
  elementButton.innerText = "X";

  elementButton.addEventListener("click", function () {
    deleteElement(this.parentNode, id);
  });

  return elementButton;
}

function deleteElement(tag, id) {
  tag.remove();

  itens.splice(
    itens.findIndex((element) => element.id == id),
    1
  );
  localStorage.setItem("itens", JSON.stringify(itens));
}
