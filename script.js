let form = document.querySelector("#menu-form");

let input = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");

function handleSubmit(event) {
  event.preventDefault();
  let menu = JSON.parse(input.value);
  count.textContent =
    "We have " + menu.length + menu.length " items today.";
    menuText.textContent = "";
    for (let i = 0; i <menu.length; i++){
        menuText.textContent = menuText.textContent + menu[i] + " - $" + menu[i].price + "\n";
        
    }
}

form.addEventListener("submit", handleSubmit);
