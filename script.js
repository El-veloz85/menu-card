let form = document.querySelector("#menu-form");

let input = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");

function handleSubmit(event) {
  event.preventDefault();
  let menu = JSON.parse(input.value);
  menuText.textContent =
    "We have " + menu.length + " items today\n" + menu.join("\n");
}

form.addEventListener("submit", handleSubmit);
