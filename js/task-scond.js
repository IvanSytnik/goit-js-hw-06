const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

 const list = document.querySelector('#ingredients');


   const firstElement = document.createElement("li");
   firstElement.textContent = ingredients[0];
   firstElement.classList.add("item");

   const secondElement = document.createElement("li");
   secondElement.textContent = ingredients[1];
   secondElement.classList.add("item");

   const thirdElement = document.createElement("li");
   thirdElement.textContent = ingredients[2];
   thirdElement.classList.add("item");

   const fourthElement = document.createElement("li");
   fourthElement.textContent = ingredients[3];
   fourthElement.classList.add("item");

   const fifthElement = document.createElement("li");
   fifthElement.textContent = ingredients[4];
   fifthElement.classList.add("item");

   const lastElement = document.createElement("li");
   lastElement.textContent = ingredients[5];
   lastElement.classList.add("item");

list.append(firstElement, secondElement, thirdElement, fourthElement, fifthElement, lastElement);
