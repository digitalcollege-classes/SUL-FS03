const readline = require('readline')

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

leitor.question('Qual módulo usamos para ler dados no node.js?\n', function (answer) {
  console.log('\nSua resposta \'' + answer + '\' foi grava com sucesso numa variável inútil')
  leitor.close()
})
