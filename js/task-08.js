const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
const object = { };
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Please fill in all the fields!");
  }
  object.email = email.value;
  object.password = password.value;
     console.log(object);
  event.currentTarget.reset();
}
;