function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const textColor = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");
const body = document.querySelector('body');
textColor.textContent = getRandomHexColor();

 colorBtn.addEventListener("click", () =>{textColor.textContent = getRandomHexColor();
  body.style.backgroundColor = textColor.textContent;
  console.log(textColor.textContent);
 }
 );
  