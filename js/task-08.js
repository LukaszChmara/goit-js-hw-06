function handleSubmit(event) {
    event.preventDefault();

    const emailValue = event.target.elements.email.value;
    const passwordValue = event.target.elements.password.value;


    if (emailValue.trim() === '' || passwordValue.trim() === '') {
      alert('Wypełnij wszystkie pola formularza!');
      return;
    }

    const formData = {
      email: emailValue,
      password: passwordValue
    };

    console.log(formData);

    event.target.reset();
  }
