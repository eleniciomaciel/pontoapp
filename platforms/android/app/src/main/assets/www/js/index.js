document.addEventListener("deviceready", function(){
    
        var jsonUsuario = localStorage.getItem("UsuariosDados");
        var usuario = JSON.parse(jsonUsuario);

        document.getElementById("p-usuario").innerText = usuario.nome_fun;
        document.getElementById("p-user_list").innerText = usuario.nome_fun;
        document.getElementById("p-cargo_list").innerText = usuario.nome_cg;
        document.getElementById("p-matricula_list").innerText = usuario.matri_fun;
        document.getElementById("p-turno_list").innerText = usuario.nome_tn;
        document.getElementById("p-email_lista").innerText = usuario.email_fun;
});

