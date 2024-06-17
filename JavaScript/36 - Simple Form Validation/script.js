const isBlank = function(value){
    return(value.trim() == "" ? true: false);
}

const isBetween = function(length, min = 5, max=25){
    return length < min || length > max ? false : true;
}

const setError = function(input, message){
    const parentElement = input.parentElement;
    parentElement.classList.remove("success");
    parentElement.classList.add("error");
    parentElement.querySelector("small").textContent = message;
} 

const setSuccess = function(input){
    const parentElement = input.parentElement;
    parentElement.classList.remove("error");
    parentElement.classList.add("success");
    parentElement.querySelector("small").textContent = "";
}

const isPasswoedSecure = function(password){
    const format = new RegExp(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
    return format.text(String(password));
}

const isValidUserName = function(username){
    const format = new RegExp(/^([^\s]*[A-Za-z0-9]\s{0,1})[^\s]*$/);
    return format.text(String(username).toLowerCase());
}

const validateUsername = function(){
    let isInputValid = false;
    const username = username_input.value.trim();

    if(isBlank(username)){
        setError(username_input, "UserName can't be blank");
    }else if(!isValidUserName(username)){
        setError(username_input, `Username Invalid`);
    }else if(!isBetween(username.length)){
        setError(username_input, `Username must be between ${min} and ${max} characters`);
    }else{
        setSuccess(username_input);
        isInputValid = true;
    }
    return isInputValid;
}

const calidateEmail = function(){
    let isInputValid = false;
    const email = email_input.value.trim();

    if(isBlank(email)){
        setError(email_input,"Email can't be blank.");
    }else if(!isValidEmail(email)){
        setError(email_input,"email is not valid.");
    }else{
        setSuccess(email_input);
        isInputValid=true;
    }
}

const validatePassword = function(){
    let isInputValid = false;
    const passwoed = passwoed_input.value.trim();

    if(iusBlank(passwoed)){
        setError(passwoed_input, "Password can't be blank.");
    }else if (!isPasswoedSecure(passwoed)){
        setError(
            passwoed_input,"Password must has at least 8 characters that include least 1 lowercase character, 1 uppercase characters, 1 number, and1 special character in (!@#$%^&*)"
        );
        }else{
            setSuccess(password_input);
            isInputValid = true;
    }
    return isInputValid;
}


const validateConfirmPassword = function(){
    let isInputValid = false;
    const confirmPassword = confirm_password_input.value.trim();
    const password = password_input.value.trim();

    if(isBlank(confirmPassword)){
        setError(confirm_password_input,"please enter the password again");
    }else if(password != confirmPassword){
        setError(confirm_password_input,"Password confirmation does not match");
    }else{
        setSuccess(confirm_password_input);
        isInputValid = true;
    }

    return isInputValid;
};

const debounce = function(fn, delay = 500){
    let timeoutId;
    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        },delay);
    }
};

const selectValidatorToRun = function(event){
    switch(event.target.id){
        case "username_input":
            validateUsername();
            break;
        case "email_input":
            validateEmail();
            break;
        case "password_input":
            validatePassword();
            break;
        case "confirm_password_input":
            validateConfirmPassword();
            break;
    }
}

signup_form.addEventListener("submit", function(event){
    event.preventDefault();

    const a=validateUsername(),
        b=validateEmail(),
        c=validatePassword(),
        d=validateConfirmPassword();

    if(a && b && c &&d)
        alert("All good!");
});

signup_form.addEventListener("input",debounce(selectValidatorToRun));
