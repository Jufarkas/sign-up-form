let submit = document.querySelector('.createAccount');
let pass = document.getElementById('password');
let passConfirm = document.getElementById('passConfirm');
let form = document.querySelector('form');
let formInput = document.querySelectorAll('input');

// stop resubmission on refresh
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

// confirm passwords match

form.addEventListener('submit', (e) => {
    if (pass.value != passConfirm.value){
        e.preventDefault();
        passConfirm.setCustomValidity("Passwords do not match");
        passConfirm.reportValidity();
        passConfirm.classList.add('invalid');
        passConfirm.addEventListener('keyup', () => {
            validatePassword();
        })
    } else {
        passConfirm.setCustomValidity('');
        passConfirm.classList.remove('invalid');
    }
});

function validatePassword(){
    if(pass.value != passConfirm.value) {
        passConfirm.setCustomValidity("Passwords do not match");
    } else {
        passConfirm.setCustomValidity('');
    }
};

