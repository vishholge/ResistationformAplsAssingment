
// fucntion is use for to check Validate all fields:::
function isValidate(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phoneno").value;
    let password = document.getElementById("password").value;
    
    
    
    let invalidCheck = document.getElementById("invalidCheck").checked;

    if(firstName == ''){
        document.getElementById("firstNameInvalid").style.display = "block"
        document.getElementById("firstNameValid").style.display = "none"

    }
    else{
        document.getElementById("firstNameValid").style.display = "block";
        document.getElementById("firstNameInvalid").style.display = "none";
    }
    if(lastName == ''){
        document.getElementById("lastNameInvalid").style.display = "block"
        document.getElementById("lastNameValid").style.display = "none"

    }
    else{
        document.getElementById("lastNameValid").style.display = "block";
        document.getElementById("lastNameInvalid").style.display = "none";
    }
    if(email == '' || !email.includes('@') || !email.includes('.') ||email.startsWith('@') || email.indexOf("@")> email.indexOf(".")){
        document.getElementById("emailInvalid").style.display = "block"
        document.getElementById("emailValid").style.display = "none"

    }
    else{
        document.getElementById("emailValid").style.display = "block";
        document.getElementById("emailInvalid").style.display = "none";
    }
    if(phone  == ''|| phone.length != 13 || phone.substring(0,3) != "+91"){
        document.getElementById("phoneInvalid").style.display = "block"
        document.getElementById("phoneValid").style.display = "none"

    }
    else{
        document.getElementById("phoneValid").style.display = "block";
        document.getElementById("phoneInvalid").style.display = "none";
    }
    if(password == '' ){
        document.getElementById("invalid-password").style.display = "block";
    }
    else{
        document.getElementById("invalid-password").style.display = "none";
    }
    if(  invalidCheck ==false  ){
        document.getElementById("tncCondition").style.display = "block";
        

    }
    else{
        document.getElementById("tncCondition").style.display = "none";
    }
    confirmPass();
    
}
function isValidFirstName(){
    let firstName = document.getElementById("firstname").value;
    if(firstName == '' || firstName.includes(" ")){
        document.getElementById("firstNameInvalid").style.display = "block";
        document.getElementById("firstNameValid").style.display = "none";
    }
    else{
        document.getElementById("firstNameInvalid").style.display = "none";
        document.getElementById("firstNameValid").style.display = "block";
    }

}
function isValidLastName(){
    let firstName = document.getElementById("lastname").value;
    if(firstName == '' || firstName.includes(" ")){
        document.getElementById("lastNameInvalid").style.display = "block";
        document.getElementById("lastNameValid").style.display = "none"
    }
    else{
        document.getElementById("lastNameInvalid").style.display = "none";
        document.getElementById("lastNameValid").style.display = "block"
    }

}
function isValidMail(){
    let email = document.getElementById("email").value;
    if(email == '' || !email.includes('@') || !email.includes('.') ||email.startsWith('@') || email.indexOf("@")> email.indexOf(".")){
       document.getElementById("emailInvalid").style.display = "block";
       document.getElementById("emailValid").style.display = "none"
    }
    else{
        document.getElementById("emailInvalid").style.display = "none";
        document.getElementById("emailValid").style.display = "block"
    }
}
function isValidPhone(){
    let phone = document.getElementById("phoneno").value;
    if(phone  == ''|| phone.length != 13 || phone.substring(0,3) !== "+91" ){
        document.getElementById("phoneInvalid").style.display = "block";
        document.getElementById("phoneValid").style.display = "none";

    }
    else{
        document.getElementById("phoneInvalid").style.display = "none";
        document.getElementById("phoneValid").style.display = "block";
    }
}
function isValidPass() {
    let pass = document.getElementById("password").value;
    if(pass != ''){
        document.getElementById("invalid-password").style.display = "none";
    }
}


let matchPass = document.getElementById("match-pass");
let noMatch = document.getElementById("doesnt-match-pass");


// function is used to match password or confirm password;
const confirmPass = () => {
    let password = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirm-password").value;
    if(confirmPass != ''){
        if(password === confirmPass){
            matchPass.style.display = "block";
            noMatch.style.display = "none";
    
        }
        else{
            matchPass.style.display = "none";
            noMatch.style.display = "block";
        }
    }
}