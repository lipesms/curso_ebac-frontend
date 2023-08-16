$(document).ready(function(){
    $('#cpf').mask('000000000-00')
    $('#cep').mask('00000-000')
    $('#cellphone').mask('(00) 00000-0000')
    
    $('form').validate({
        rules: {
            name:{
                required:true
            },
            emal:{
                required:true
            },
            tel:{
                required:true
            },
            cpf:{
                required:true
            }
        },
        messages:{
            name:'Please, tell us your name',
            email: 'The email is required',
            tel: 'Tell us your cellphone number',
        }
    })
    
})