var buttonSearch = document.querySelector("#buscar-pacientes");

buttonSearch.addEventListener("click", function() {
    console.log("Carregando...");

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        //console.log(xhr.responseText);
        var pacientes = JSON.parse(xhr.responseText);
        console.log(pacientes);
        pacientes.forEach(function(paciente){
            pegaPacientesDaTabela(paciente);
        });
    });

    xhr.send();
});