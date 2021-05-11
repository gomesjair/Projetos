const btnEntrar = document.querySelector("#entrar")
const txtUsuario = document.querySelector("#usuario")
const txtSenha = document.querySelector("#senha")

btnEntrar.addEventListener("click",function(){
    let usuario = txtUsuario.value
    let senha = txtSenha.value
    console.log(usuario,senha);
    if(usuario=="" || senha==""){
        alert("Completar usúario e senha")
    
    }else if(usuario=="fatec" && senha=="fatec2407"){
        window.location = "./conteudo/covid.html"
    }
})