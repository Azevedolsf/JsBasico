
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');


    var paciente = pegarValoresFormulario(form);

    var pacienteTr = montarNovaTr(paciente);    
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    validaPaciente(tabela);
    form.reset();
})

 
function pegarValoresFormulario(form){
    
    var paciente =
    {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

};

function montaTd(dado, classe){
    
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function montarNovaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    console.log(pacienteTr);

    return pacienteTr;

};

function validaPaciente(tabela){
    
    //var pacientes = document.querySelectorAll(".paciente");

    for( var i = 0; i < pacienteTr.length; i++){
    
    var paciente = pacienteTr[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent; 

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

