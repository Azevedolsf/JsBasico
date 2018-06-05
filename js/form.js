
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');


    var paciente = pegarValoresFormulario(form);

    var pacienteTr = montarNovaTr(paciente);    
    
    if(!validaPaciente(paciente)){
        msgErro = document.querySelector('.msgErro');
        msgErro.textContent = "Paciente Inválido";
        msgErro.classList.add('pacienteInvalido');
        console.log(msgErro);
        return;
    }else{
        msgErro = document.querySelector('.msgErro');
        msgErro.textContent = "Paciente Cadastrado";
        msgErro.classList.add('pacienteValido');
        console.log(msgErro);
    }
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

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
function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return true;
    }else{
        return false;
    }
}