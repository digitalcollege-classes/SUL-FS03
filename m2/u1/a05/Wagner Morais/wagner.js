const readline = require('readline')
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ANO_ATUAL = 2023

function processar (ano_informado_no_prompt) {
    var wagner = {
        calcular_idade: function (ano_para_calcular_idade) {
            return ANO_ATUAL - ano_para_calcular_idade
        }
    }
    console.log(wagner.calcular_idade(ano_informado_no_prompt))
    leitor.close()
}

leitor.question('Digite o ano de nascimento > ', processar)