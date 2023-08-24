const leitor = require('./leitor')
let numero1
let numero2
function ler_numero1(resposta)
{
    numero1 = resposta
    leitor.close()
}
leitor.question('digite o primeiro número > ', ler_numero1)

function ler_numero2(resposta)
{
    numero2 = resposta
    leitor.close()
}
leitor.question('digite o segundo número > ', ler_numero2)

const numero3 = numero1 + numero2
console.log(numero3)