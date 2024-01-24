const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", loginSubmit);

function loginSubmit(event) {
  event.preventDefault();

  const loginForm = event.target;
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (email === "" || password === "") {
    const message = "Please fill in all the fields!";
    alert(message);
    return
  }

  const formData = {
    email: email,
    password: password
  };

  console.log("Form data:", formData);
  loginForm.reset();
}
