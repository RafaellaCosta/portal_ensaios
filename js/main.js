function consultarUsuario(){
    login = $("#campo-login").val()
    senha = $("#campo-senha").val()

    jsonBody = {
        "login": login,
        "senha": senha
    }

    $.ajax({
        url: "127.0.0.1:5000/usuarios",
        type: "POST",
        contentType: "application/json",
        data: jsonBody,
        dataType: "json",
        success: function(response){
            console.log(response);
        }
    })
}