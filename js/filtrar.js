var campoFiltro = document.querySelector("#filtrarTabela");
var copia = document.querySelector(".copia");

campoFiltro.addEventListener("input", function(){

    console.log(this.value);

    var pacientes = document.querySelectorAll('.paciente');
    for(i=0; i <pacientes.length; i++){
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        console.log(nome);
    }
})