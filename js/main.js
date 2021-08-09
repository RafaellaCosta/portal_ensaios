// function criarUsuario(){
//     $.ajax({
//         url: "http://localhost:5000/usuarios/",
//         type: "POST",
//         contentType: "application/json",
//         dataType: "json",
//         success: function(response){
//             console.log(response);      
//         }
//     })
// }


$(function () {
$("#botao-enviar").click(function(e){
    console.log('p1')
    //e.preventDefault();
    console.log('p2')

    login = $("#campo-login").val()
    senha = $("#campo-senha").val()

    jsonBody = {
        "login": login,
        "senha": senha
    }

    $.ajax({
        url: "http://localhost:5000/usuarios/",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(jsonBody),
        dataType: "jso0n",
        success: function(response){
            console.log(response);
        },
        error: function(){
            console.log('error')
        }
    })
})
});