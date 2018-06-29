
var filtrarCampo = document.querySelector("#filtrarTabela");

filtrarCampo.addEventListener("input", function(){
    //console.log(this.value);
    var pacientes = document.querySelectorAll('.paciente');
    if(filtrarCampo.value.length > 0){
        pacientes.forEach(function(paciente){
            var nomeTd = paciente.querySelector(".info-nome");
            var nome = nomeTd.textContent;     
            var expressao = new RegExp(filtrarCampo.value, "i");
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }      
        })
    }else{  //apenas quando o campo input estiver vazio
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");    
        })
    }
})

//Feito com o **FOR**
// var filtrarCampo = document.querySelector("#filtrarTabela");

// filtrarCampo.addEventListener("input", function(){
//     //console.log(this.value);
//     var pacientes = document.querySelectorAll('.paciente');
//     if(filtrarCampo.value.length > 0){
//         for(var i = 0; i < pacientes.length; i++){
//             var paciente = pacientes[i];
//             var nomeTd = paciente.querySelector(".info-nome");
//             var nome = nomeTd.textContent;     
//             var expressao = new RegExp(filtrarCampo.value, "i");
//             if(!expressao.test(nome)){
//                 paciente.classList.add("invisivel");
//             }else{
//                 paciente.classList.remove("invisivel");
//             }      
//         }
//     }else{  //apenas quando o campo input estiver vazio
//         for(var i = 0; i < pacientes.length; i++){
//             var paciente = pacientes[i];
//             paciente.classList.remove("invisivel");    
//         }
//     }
// })

