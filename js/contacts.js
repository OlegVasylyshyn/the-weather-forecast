$(document).ready(function(){ 
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });    
    
    
    $('#submit').on('click', function(e) {
        e.preventDefault();
        sendForm();
    });
    $('form').keypress(function(e) {
        if(e.which == 13) {
            sendForm();
        }
    });
    
    $('#closeModel').on('click', function(){
        
        $('#myModal').modal('hide');
        $('#formDiv').show();
        
    });
    
    
    
});

function sendForm(){
    
    removeErrorDivs();
    
    let submitForm = {};
    submitForm.name = nameInput.value;
    submitForm.email = email.value;
    submitForm.mobile = mobile.value;
    submitForm.subject = subject.value;
    submitForm.message = message.value;
    
    if(!checkSubmitForm(submitForm)) {
        console.error('Invalid submitForm', submitForm);
        return;
    }
    
    submit(submitForm);
    
    
    $('#formDiv').hide();
    $('#myModal').modal('show');
    contactsForm.reset();
}

function checkSubmitForm(submitForm){
    if(!submitForm.name || submitForm.name.length === 0) {
        nameInput.placeholder = 'Name mustn\'t be empty';
        nameInput.classList.remove('black-placeholder');
        nameInput.classList.add('red-placeholder');
        $('#nameDiv').addClass('has-error');
        return false;   
    }
    if(!submitForm.email || submitForm.email.length === 0) {
        email.placeholder = 'Email mustn\'t be empty';
        email.classList.remove('black-placeholder');
        email.classList.add('red-placeholder');
        $('#emailDiv').addClass('has-error');
        return false;  
    } 
    if(!submitForm.mobile || submitForm.mobile.length === 0) {
        mobile.placeholder = 'Mobile number mustn\'t be empty';
        mobile.classList.remove('black-placeholder');
        mobile.classList.add('red-placeholder');
        $('#mobileDiv').addClass('has-error');
        return false;
    }
    if(!submitForm.subject || submitForm.subject.length === 0) {
        subject.placeholder = 'Subject mustn\'t be empty';
        subject.classList.remove('black-placeholder');
        subject.classList.add('red-placeholder');
        $('#subjectDiv').addClass('has-error');
        return false;
    }
    if(!submitForm.message || submitForm.message.length === 0) {
        message.placeholder = 'Message mustn\'t be empty';
        message.classList.remove('black-placeholder');
        message.classList.add('red-placeholder');
        $('#messageDiv').addClass('has-error');
        return false;   
    }

    return true;
}

function submit(submitForm){
    $.ajax({
            method: 'POST',
            url: URL,
            data: submitForm
    }).done(function(response) {
            console.info('Form was successfully submited');
            console.log('Response: ', response);
    });
}

function removeErrorDivs(){
    $('#nameDiv').removeClass('has-error');
    nameInput.placeholder = 'Name';
    nameInput.classList.add('black-placeholder');
    nameInput.classList.remove('red-placeholder');
    
    $('#emailDiv').removeClass('has-error');
    email.placeholder = 'Email';
    email.classList.add('black-placeholder');
    email.classList.remove('red-placeholder');
    
    $('#mobileDiv').removeClass('has-error');
    mobile.placeholder = 'Mobile number';
    mobile.classList.add('black-placeholder');
    mobile.classList.remove('red-placeholder');
    
    $('#subjectDiv').removeClass('has-error');
    subject.placeholder = 'Subject';
    subject.classList.add('black-placeholder');
    subject.classList.remove('red-placeholder');
    
    $('#messageDiv').removeClass('has-error');
    message.placeholder = 'Message';
    message.classList.add('black-placeholder');
    message.classList.remove('red-placeholder');
    
}
