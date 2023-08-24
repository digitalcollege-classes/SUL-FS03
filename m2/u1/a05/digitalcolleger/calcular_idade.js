const ano_nascimento = 1981

const ANO_ATUAL = 2023

const pessoa = {
    calcular_idade: function (ano) {
        return ANO_ATUAL - ano
    }
}

console.log(pessoa.calcular_idade(ano_nascimento))