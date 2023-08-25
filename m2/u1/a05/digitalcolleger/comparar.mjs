// leia dois número do terminal, identifique se o primeiro
// é maior que o segundo e imprima um texto com a mensagem

// import usando caminho relativo
import leitor from '../../../../lib/leitor.mjs'

const numero1 = await leitor('Digite o primeiro número > ')

const numero2 = await leitor('Digite o segundo número > ')

if (numero1 > numero2) {
    console.log('O primeiro número é maior que o segundo')
} else {
    console.log('O segundo número é maior que o primeiro')
}