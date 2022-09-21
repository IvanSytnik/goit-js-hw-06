const textInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(textInput.value);
text.style.fontSize = `${textInput.value}px`;
textInput.addEventListener( () => {  
    text.style.fontSize = `${textInput.value}px`;
  });