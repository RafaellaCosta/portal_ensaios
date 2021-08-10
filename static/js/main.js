$(function () {
    $("#botao-enviar").click(function (e) {

        nome = $("#campo-nome").val()
        sobrenome = $("#campo-sobrenome").val()
        email = $("#campo-email").val()
        telefone = $("#campo-telefone").val()

        jsonBody = {
            "nome": nome,
            "sobrenome": sobrenome,
            "email": email,
            "telefone": telefone
        }

        console.log(JSON.stringify(jsonBody))

        $.ajax({
            url: "http://localhost:5000/clientes/",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(jsonBody),
            dataType: "json",
            success: function (response) {
                console.log(response);
            },
            error: function () {
                console.log('error')
            }
        })
    })

    $("#botao-atualizar").click(function (e) {

        $.ajax({
            url: "http://localhost:5000/clientes/",
            type: "GET",
            success: function (clientes) {
                linhas = ""
                for (i in clientes) {
                    cliente = clientes[i]
                    // Cria a linha com os dados do cliente
                    linha = "<tr>   <td id=nome>" + cliente.nome + "</td><td id=sobrenome>" + cliente.sobrenome + "</td><td id=email>" + cliente.email + "</td><td id=telefone>" + cliente.telefone + "</td></tr>"
                    linhas = linhas.concat(linha)
                   // console.log("linha" + linha)
                }

                console.log(linhas)

                // Adiciona as linhas no HTML
                $("#listar-usuarios").empty().append(linhas)

            },
            error: function () {
                console.log('error')
            }
        })

    })

    $("#botao-deletar").click(function (e) {
        $.ajax({
            url: "http://localhost:5000/clientes/",
            type: "DELETE",
            success: function (response) {
                alert("Clientes deletados!");
            },
            error: function () {
                console.log('error')
            }
        })
    })
});