// leia dois números e um operador do terminal
// use o operador para definir qual das funções 
// serão executadas:
// - comparar
// - calcular média
// - somar
// - subtracao
import leitor from '../../../../lib/leitor.mjs'

const numero1 = await leitor('Digite o primeiro número > ')
const numero2 = await leitor('Digite o segundo número > ')
const operador = await leitor('Digite o operador > ')

if (operador == '+') {
    console.log(parseInt(numero1) + parseInt(numero2))
} else if (operador === '-') {
    console.log(numero1 - numero2)
} else if (operador === '*') {
    console.log(numero1 * numero2)
} else if (operador === '/') {
    console.log(numero1 / numero2)
}
