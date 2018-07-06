var buttonSearch = document.querySelector("#buscar-pacientes");

buttonSearch.addEventListener("click", function() {
    console.log("Carregando...");

    var xhr = new XMLHttpRequest();
    //o open abre a connexão e configurar o método de requisição que deseja e pra onde quer fazer
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //testa a mensagem de erro
    //xhr.open("GET", "https://api-pacientes.herokuapp.com/paci11111entes");
  
    xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            //console.log(xhr.responseText);
            var pacientes = JSON.parse(xhr.responseText);
            console.log(pacientes);
            pacientes.forEach(function(paciente){
                pegaPacientesDaTabela(paciente);
            });
        }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        erroAjax.classList.remove("invisivel");
        } 
    });
    xhr.send();  
});