let number = document.querySelector('#value');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');
let counterValue = Number(number.textContent);
 plusBtn.addEventListener("click", () => {
    
    counterValue += 1;
    number.textContent = counterValue;
    
  });
  minusBtn.addEventListener("click", () => {
    
    counterValue -= 1;
    number.textContent = counterValue;
    
  });

  