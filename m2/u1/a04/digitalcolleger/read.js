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

leitor.question('Quantos passos você deseja dar? > ', processamento)
