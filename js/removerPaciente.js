var pacientes = document.querySelectorAll('.paciente');

    pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("fui clicado");
        var node = document.querySelector("#tabela-pacientes")
        this.remove();
    
        });
});
    
