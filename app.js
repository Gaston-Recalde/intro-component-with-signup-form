const form = document.getElementById('form');
const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {

	const fNameValue = fName.value.trim();
	const lNameValue = lName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
    const spanFname = document.getElementById('span__fname');
    const imgFname = document.getElementById('img__fname');
	if(fNameValue === '') {
		spanFname.className = 'error__span-active';
        imgFname.className = 'error__icon-active';
	} else {
		spanFname.className = 'error__span';
        imgFname.className = 'error__icon';
	}

    const spanLname = document.getElementById('span__lname');
    const imgLname = document.getElementById('img__lname');
    if(lNameValue === '') {
		spanLname.className = 'error__span-active';
        imgLname.className = 'error__icon-active';
	} else {
		spanLname.className = 'error__span';
        imgLname.className = 'error__icon';
	}
	
    const spanEmail = document.getElementById('span__email');
    const imgEmail = document.getElementById('img__email');
    const emailInput = document.getElementById('email');
	if(emailValue === '') {
		spanEmail.className = 'error__span-active';
        imgEmail.className = 'error__icon-active';
        emailInput.placeholder = 'email@example.com';
	} else if (!isEmail(emailValue)) {
		spanEmail.className = 'error__span-active';
        imgEmail.className = 'error__icon-active';
	} else {
		spanEmail.className = 'error__span';
        imgEmail.className = 'error__icon';
	}
	
    const spanPass = document.getElementById('span__pass');
    const imgPass = document.getElementById('img__pass');
	if(passwordValue === '') {
		spanPass.className = 'error__span-active';
        imgPass.className = 'error__icon-active';
	} else {
		spanPass.className = 'error__span';
        imgPass.className = 'error__icon';
	}
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}