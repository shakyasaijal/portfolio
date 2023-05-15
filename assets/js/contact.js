let error = [];
let disableBtn = true;


const phoneValidation = () => {
    const phone = document.getElementById('phone').value;
    if (!phone){
        error.push({'phone': 'Phone number is required.'})
        return false;
    }else{
        const validStartWith = ['+61', '0'];
        let flag = false;
    
        if (phone.length < 9) {
            error.push({'phone': 'Phone number is not valid.'})
            return false;
        }
        for (let i = 0; i < validStartWith.length; i++) {
            if (phone.startsWith(validStartWith[i])) {
                flag = true;
            }
        }
        return flag;
    }
}

const emailValidation = () => {
    const emailRegExp = /^\S+@\w+([.-]?\w+)*(\.\w{2,15})+$/;
    let email = document.getElementById('email').value;

	if (!email) {
        error.push({'email': 'Email is required.'})
		return false;
	}
	email = email.trim();
	let testEmail = emailRegExp.test(email);
    if (testEmail){
        return true
    }
    else{
        error.push({'email': 'Email is not valid.'})
        return false
    }

}

const validation = () => {
    // Email validation
    let emailValidate = emailValidation();

    // Full Name validation
    if (!document.getElementById('full_name').value)
        error.push({'full_name': 'Full Name is required.'})
    else if (document.getElementById('full_name').value.length < 4)
        error.push({'full_name': 'Full Name is not valid.'})

    // Phone validation
    let phoneValidate = phoneValidation();
    if (!phoneValidate) error.push({'phone': 'Phone number is not valid.'})

    // Subject
    if (!document.getElementById('subject').value)
        error.push({'subject': 'Subject is required.'})

    // Message
    if (!document.getElementById('message').value)
        error.push({'message': 'Message is required.'})
    return error;
}

const onSubmit = () => {
    error = [];
    let formValidation = validation();
    const errorKeys = ['full_name_error', 'phone_error', 'email_error', 'subject_error', 'message_error']

    if (error.length > 0) {
        clearErrorMessages();

        for(let i=0; i<formValidation.length; i++){
            let key = Object.keys(formValidation[i])[0]
            let errorMessage = formValidation[i][key]
            document.getElementById(`${key}_error`).innerHTML = errorMessage;
        }
    }else{
        // Clear all input fields
        let clearFields = document.getElementsByClassName('form-input')
        for(let i=0;i < clearFields.length; i++){
            clearFields[i].value = '';
        }

        clearErrorMessages();
        alert('Submitted.');
        
    }
}

// Clear error messages
const clearErrorMessages = () => {
    let allErrorMessages = document.getElementsByClassName('form-error');
    for (let i=0; i< allErrorMessages.length; i++){
        allErrorMessages[i].innerHTML = '';
    }
}