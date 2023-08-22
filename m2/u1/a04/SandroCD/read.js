/* const readline = require('readline')

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

leitor.question('Qual módulo usamos para ler dados no node.js?\n', function (answer) {
  console.log('\nSua resposta \'' + answer + '\' foi grava com sucesso numa variável inútil')
  leitor.close()
}) */

const readline = require('readline')
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function processamento (resposta) {
  if (resposta == 5) {
    console.log('Nada! Sai fora! Fatal! Cansado!')
  } else {
    let passo
    for (passo = 0; passo < resposta; passo++) {
      console.log("Este é o passo: ", passo + 1)
    }
  }
  leitor.close()
}

leitor.question('Quantos passos você deseja dar?\n', processamento)

