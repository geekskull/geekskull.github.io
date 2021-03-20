$(function() {
    $("form[name='form']").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'This field is required'
            },
            email: {
                required: 'This field is required'
            },
            message: {
                required: 'This field is required'
            }
        },
        errorElement: 'span',
        submitHandler: function(form) {

            var data = {
                name: $(form).find('input[name="name"]').val(),
                email: $(form).find('input[name="email"]').val(),
                message: $(form).find('textarea[name="message"]').val(),
            }

            $.ajax({
                type: "POST",
                url: '../includes/send-email.php',
                data: data,
                dataType: 'json',
                success: function(response) {
                    $(form).css({
                        'display': 'none'
                    })
                    $('.form-success-description').css({
                        'display': 'table'
                    })
                },
                error: function(error) {}
            })

        }
    })
})