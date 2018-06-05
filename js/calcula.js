
var titulo = document.querySelector(".titulo");
titulo.textContent = "Miau miau";

    var pacientes = document.querySelectorAll(".paciente");

    for( var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    var imc = tdImc;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!validaPeso){
        pesoValido = false;
        imc.textContent = "Peso Inválido";
        paciente.classList.add("pacienteInvalido");
        
    }
    if (!validaAltura){
        alturaValida = false;
        imc.textContent = "Altura Inválida";
        paciente.classList.add("pacienteInvalido");
    }
    if(!pesoValido && !alturaValida){
        imc.textContent = "Altura e peso inválidos";        
    }

    if (alturaValida && pesoValido){
        imc.textContent = calculaImc(peso, altura);
    } 
}

function validaPeso(peso){
    if(peso < 500 && peso > 0){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(peso < 3 && peso > 0){
        return true;
    }else{
        return false;
    }
}
function calculaImc(peso, altura){

    var imc = peso / (altura*altura);

    return imc.toFixed(2);

};



