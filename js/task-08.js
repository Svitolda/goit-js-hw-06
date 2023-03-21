const form = document.querySelector(".login-form");
// const from = document.querySelector(".login-form").reset();

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements 
    console.log(formElements);
    const email = formElements.email;
    const password = formElements.password;

    const formData = {
        email,
        password
    };
    console.log(formData)

    if (email.value === "" || password.value === "") {
        alert("Fill in the fields of the form");
    } else {
        alert('The form has been submitted!');
        console.log(`The form has email ${email.value} and password ${password.value}`);
    }
    
    event.currentTarget.reset();
}
