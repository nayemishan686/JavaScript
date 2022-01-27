const form = document.getElementById('form');
const username = document.getElementById('username');
const useremail = document.getElementById('useremail');
const usernumber = document.getElementById('usernumber');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


//add events
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// define validate function

    const validate = () => {
    const usernameVal = username.value.trim();
    const useremailVal = useremail.value.trim();
    const usernumberVal = usernumber.value.trim();
    const passwordVal = password.value.trim();
    const repasswordVal = repassword.value.trim();

    //valid username
    if(usernameVal == ''){
        setError(username, 'Username cannot be blank');
    }else if(usernameVal.length <= 2){
        setError(username, 'Username mustat least 3 character');
    }else{
        setSuccess(username);
    }


    //valid email
    if(useremailVal === ''){
        setError(useremail, 'Email cannot be blank');
    }else if(!isValidEmail(useremailVal)){
        setError(useremail, 'give a valid email address');
    }else{
        setSuccess(useremail);
    }

    //valid number
    if(usernumberVal === ''){
        setError(usernumber, 'usernumber cannot be blank');
    }else if(usernumberVal.length != 11){
        setError(usernumber, 'Use 11 digit in phone number');
    }else{
        setSuccess(usernumber);
    }

    //valid password
    if(passwordVal === ''){
        setError(password, 'password cannot be blank');
    }else if(passwordVal.length <= 5){
        setError(password, 'password at least 5 characters');
    }else{
        setSuccess(password);
    }

    //valid repassword
    if(repasswordVal === ''){
        setError(repassword, 'password cannot be blank');
    }else if(passwordVal != repasswordVal){
        setError(repassword, 'password does not match');
    }else{
        setSuccess(repassword);
    }


}

function setError(input, errormsg){
    const inputBox = input.parentElement;
    const small = inputBox.querySelector('small');
    inputBox.className = "input-box error"
    small.innerText = errormsg;
}

function setSuccess(input, errormsg){
    const inputBox = input.parentElement;
    inputBox.className = "input-box success"
}