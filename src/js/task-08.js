const form = document.querySelector(".login-form");
// const from = document.querySelector(".login-form").reset();

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // const formElements = event.currentTarget.elements 
    // console.log(formElements);

    const formData = new FormData(event.currentTarget);
    console.log(formData)

    formData.forEach((name, value) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    });

    if (email.value || password.value === '') {
        alert("Fill in the fields of the form");
    } else {
        alert('The form have been submitted!');
        console.log(`The form has email ${email.value} and password ${password.valeu}`);
    }
}
const from = document.querySelector(".login-form").reset();