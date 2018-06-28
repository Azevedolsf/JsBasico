var filtrarCampo = document.querySelector("#filtrarTabela");

filtrarCampo.addEventListener("input", function(){
    //console.log(this.value);
    var pacientes = document.querySelectorAll('.paciente');
    if(filtrarCampo.value.length > 0){
        pacientes.forEach(function(paciente){
            var nomeTd = paciente.querySelector(".info-nome");
            var nome = nomeTd.textContent;     
            
            if(nome != filtrarCampo.value){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }      
        })
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");    
        })
    }
})



