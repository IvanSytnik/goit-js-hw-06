const allElement = document.querySelectorAll(".item");
console.log("Number of categories:",allElement.length);


allElement.forEach(element => {
    const category = element.querySelector("h2");
    console.log("Category:",category.textContent);
    const elements = element.querySelectorAll("li");
    console.log("Elements:", elements.length);

})
