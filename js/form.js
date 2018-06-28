
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = pegarValoresFormulario(form);

    var pacienteTr = montarNovaTr(paciente);    
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMsgErro(erros);
        return;
    }   
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var msgErro = document.querySelector('.msgErro');
    msgErro.innerHTML = ""; 
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
    
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("Preencha o campo 'Nome' ");
    }
    if (paciente.peso.length == 0){
        erros.push("Preencha o campo 'Peso' ");
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso Inválido");
    }
    if (paciente.altura.length == 0){
        erros.push("Preencha o campo 'Altura' ");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura Inválida");        
    }
    if (paciente.gordura.length == 0){
        erros.push("O campo 'Gordura' não pode ficar vazio ");
    }

    return erros;
}
function exibeMsgErro(erros){
    
        var msgErro = document.querySelector(".msgErro");
        msgErro.innerHTML = "";//toda vez que a função for chamada, o innetHTML vai limpar tudo
    //o valor que é posto dentro da função, no casso "erro", é utilizado apenas para referênciar o indice 
        erros.forEach(function(erro){
            var novaLi = document.createElement("li");
            novaLi.textContent = erro;
            novaLi.classList.add("msg");
            novaLi.classList.add("pacienteInvalido");
            msgErro.appendChild(novaLi);
        });
        
        }        