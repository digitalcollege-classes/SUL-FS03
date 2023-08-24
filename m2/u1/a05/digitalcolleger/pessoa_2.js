const ANO_ATUAL = 2023

const pessoa = {
    calcular_idade: function (ano_para_calcular_idade) {
        return ANO_ATUAL - ano_para_calcular_idade
    }
}

module.exports = pessoa