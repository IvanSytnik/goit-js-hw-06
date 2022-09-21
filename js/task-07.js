const textInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `${textInput.value}px`;

textInput.addEventListener("input", () =>{  
  text.style.fontSize = `${textInput.value}px`;
}
  );
  
  