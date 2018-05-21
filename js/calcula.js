
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

    var pesoValido = true;
    var alturaValida = true;

    if (peso >= 500 || peso <= 0){
        pesoValido = false;
        imc.textContent = "Peso Inválido";
        paciente.classList.add("pacienteInvalido");
        
    }
    if (altura >= 3.00 || altura <= 0){
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
function calculaImc(peso, altura){

    var imc = peso / (altura*altura);

    return imc.toFixed(2);

};



