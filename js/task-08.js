const formRef = document.querySelector(".login-form");

console.log(formRef);

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elementsRef = event.currentTarget.elements;

  const email = elementsRef.email.value;
  const password = elementsRef.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.currentTarget.reset();
}
