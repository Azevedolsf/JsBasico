var filtrarCampo = document.querySelector("#filtrarTabela");

filtrarCampo.addEventListener("input", function(){
var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function(paciente){
        var nomeTd = paciente.querySelector(".info-nome");
        var nome = nomeTd.textContent;
        console.log(nome);
    })
})