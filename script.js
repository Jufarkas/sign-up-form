let submit = document.querySelector('.createAccount');
let pass = document.getElementById('password');
let passConfirm = document.getElementById('passConfirm');
let form = document.querySelector('form');
let input = document.querySelectorAll('input');

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
    } else {
        passConfirm.setCustomValidity('');
    }
})