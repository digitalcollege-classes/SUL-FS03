import leitor from '../../../../lib/leitor.mjs'

const peso = await leitor('Digite o peso > ')

const altura = await leitor('Digite a altura > ')

console.log(peso / (altura * altura))