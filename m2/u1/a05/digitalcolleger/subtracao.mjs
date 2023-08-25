// crie um programa que lê do terminal dois números, 
// faça a subtração deles e mostre o resultado
import leitor from '../../../../lib/leitor.mjs'

const numero1 = await leitor('Digite o primeiro número > ')

const numero2 = await leitor('Digite o segundo número > ')

const numero3 = numero1 - numero2

console.log(numero3)