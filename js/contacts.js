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
    
    
    $('#submit').on('click', function(e){
        e.preventDefault();
        
        let submitForm = {};
        submitForm.name = nameInput.value;
        submitForm.email = email.value;
        submitForm.mobile = mobile.value;
        submitForm.subject = subject.value;
        submitForm.message = message.value;
        
        if(!checkSubmitForm(submitForm)) {
            // sum message with error
            console.error('Invalid submitForm', submitForm);
            return;
        }
        
        submit(submitForm);
        
        
        $('#formDiv').hide();
        $('#myModal').modal('show');
        
    });
    
    $('#closeModel').on('click', function(){
        
        $('#myModal').modal('hide');
        $('#formDiv').show();
        
    });
    
    
    
});

function checkSubmitForm(submitForm){
    if(!submitForm.name || submitForm.name.length === 0) return false;
    if(!submitForm.email || submitForm.email.length === 0) return false;
    if(!submitForm.mobile || submitForm.mobile.length === 0) return false;
    if(!submitForm.subject || submitForm.subject.length === 0) return false;
    if(!submitForm.message || submitForm.message.length === 0) return false;

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

