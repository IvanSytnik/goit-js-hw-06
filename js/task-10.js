function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const clearBtn = document.querySelector('button[data-destroy]');
const table = document.querySelector('#controls');
const box = document.querySelector('#boxes');
const array = [];
function createBoxes(amount) {
  for(let i = 1; i <= amount; i += 1) {
    const pisun = (i+2)*10;
    array.push(`<div width="${pisun}" height="${pisun}" style="background-color:${getRandomHexColor()};" > afssdfsasafa</div>`);
  }
}

function destroyBoxes() {
  box.remove();
  table.insertAdjacentHTML("afterend", `<div id="boxes"></div>`);
}


createBtn.addEventListener("click", () => {
  let size = input.value;
  createBoxes(size);
  box.innerHTML = array.join("");
});

 
clearBtn.addEventListener("click", () => {
  destroyBoxes();
});
