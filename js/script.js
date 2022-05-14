let password = document.querySelector('#password');
let passwordC = document.querySelector('#password-c');
let error = document.querySelector('.error');
password.addEventListener('keyup', passwordListener);
passwordC.addEventListener('keyup', passwordListener);
function passwordListener(){
    if(password.value !== passwordC.value){
        error.textContent = "*Passwords do not match";
    }else{
        error.textContent = '';
    }
}