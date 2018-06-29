
var campoInput = document.querySelector('#filtrarTabela');

campoInput.addEventListener('input', function(){
    //console.log(this.value);
    if(this.value.length > 0){
        var pacientes = document.querySelectorAll(".paciente");
         for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector('.info-nome');
            var nome = tdNome.textContent;
            console.log(nome);
            var expressoes = new RegExp(this.value, 'i');
            if(!expressoes.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})