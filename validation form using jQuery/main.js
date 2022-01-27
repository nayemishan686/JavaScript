

jQuery('#regiform').validate({
    rules:{
        username: {
            required: true,
            minlength: 4,
            maxlength: 10
        },
        usermail: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 5
        },
        repassword: {
            required: true,
            equalTo: '#password'
        }
        
        
    },
    messages:{
        username: {
            required: 'Please fill your username',
            minlength: 'User name must be at least 4 characters long',
            maxlength: 'User name must be under 10 characters'
        },
        useremail: {
            required: 'Please enter your email address',
            email: 'Please enter valid email address'
        },
        password: {
            required: 'Please enter your password',
            minlength: 'Password must be at least 5 characters'
        },
        repassword: {
            required: 'Please retype your password',
            equalTo: 'password does not match'
        }
    }
});



