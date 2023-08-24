import leitor from './../../../../lib/leitor.mjs'

const numero1 = await leitor('digite o primeiro número > ')
const numero2 = await leitor('digite o segundo número > ')

const numero3 = numero1 + numero2
console.log(numero3)
