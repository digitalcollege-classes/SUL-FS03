const readline = require('readline')
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const pessoa = require('./pessoa_2')

function processar (ano_informado_no_prompt) {
    console.log(
        pessoa.calcular_idade(ano_informado_no_prompt)
    )
    leitor.close()
}

leitor.question('Digite o ano de nascimento > ', processar)
