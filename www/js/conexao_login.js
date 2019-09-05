
$(document).ready(function () {
    $('#logText').html('Login');
    $('#formVerificaAcesso').submit(function (e) {
        e.preventDefault();
        $('#logText').html('Verificando...');
        var conecao_phpCOntroller_app = 'https://pontotime/my_app/LoginAppController/validaAcesso';
        var user = $('#formVerificaAcesso').serialize();
        var login = function () {
            $.ajax({
                type: 'POST',
                url: conecao_phpCOntroller_app,
                dataType: 'json',
                data: user,
                success: function (response) {
                    $('#message').html(response.message);
                    $('#logText').html('Login');
                    if (response.error) {
                        $('#responseDiv').removeClass('alert-success').addClass('alert-danger').show();
                    } else {

                        $('#responseDiv').removeClass('alert-danger').addClass('alert-success').show();
                        var dadosUser = JSON.stringify(response.messageOk);
                        localStorage.setItem('UsuariosDados', dadosUser);
                        $('#formVerificaAcesso')[0].reset();

                        setTimeout(function () {
                            window.location="registro-acesso.html"; 
                        }, 3000);
                    }
                }
            });
        };
        setTimeout(login, 3000);
    });

    $(document).on('click', '#clearMsg', function () {
        $('#responseDiv').hide();
    });
});