let message = document.querySelector('.message');
let submit = document.querySelector('#submitbtn');

submit.addEventListener('click', GetInputs);

function GetInputs(){
    const inputs = [];
    const getInputNodeList = document.querySelectorAll('.input');

    for (const input of getInputNodeList) {
        inputs.push(input.value);
    }
    inputValidation(inputs);
}

function inputValidation(inputValues){
    let validationMessage = '';
    message.innerText = validationMessage;

    //first name
    validationMessage = ValidateFirstName(inputValues[0]);
    if (validationMessage){
        message.innerText = validationMessage;
        return;
    }
    //last name 
    validationMessage = ValidateLastName(inputValues[1]);
    if(validationMessage){
        message.innerText = validationMessage;
        return;
    }
    //email
    if (!validateEmail(inputValues[2])) {
        message.innerText = 'Email address is invalid.';
        return;
    }

    //subject
    validationMessage = ValidateSubject(inputValues[3]);
    if (validationMessage) {
        message.innerText = validationMessage;
        return;
    }

    //message
    validationMessage = ValidateMessageContent(inputValues[4]);
    if (validationMessage) {
        message.innerText = validationMessage;
        return;
    }

    submitForm(inputValues);
}

function ValidateFirstName(input){
    const firstName = input.trim();
    if(firstName.length === 0){
        return 'First name is required';
    }
    if (firstName.length > 60){
        return 'First name is longer than expected';
    }
    return '';

}
function ValidateLastName(input){
    const lastName = input.trim();
    if(lastName.length === 0){
        return 'Last name is required';
    }
    if (lastName.length > 60){
        return 'Last name is longer than expected';
    }
    return '';

}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function ValidateSubject(input) {
    const subject = input.trim();
    if (subject.length === 0) {
        return 'Subject is required.';
    }
    if (subject.length > 100) {
        return 'Subject line longer than expected.';
    }
    return '';
}

function ValidateMessageContent(input) {
    const messageContent = input.trim();
    if (messageContent.length === 0) {
        return 'Message content is required.';
    }
    if (messageContent.length > 1000) {
        return 'Message content longer than expected.';
    }
    return '';
}

function submitForm(inputs){
    console.log(inputs);
}
