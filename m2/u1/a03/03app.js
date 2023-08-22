
// 06) Neste exemplo, vamos calcular a média de um conjunto de um conjunto 

// let chuchu = [8, 7, 9, 10, 6, 8, 9]

// soma = 0
// for (let index = 0; index < chuchu.length; index++) {
    
//     soma = soma + chuchu[index]
// }
// media = soma/chuchu.length
// console.log('A media da lista ser ${media.toFixed(2)}')

// let string = 'Ola pessoal'

//Exemplo 1: Escrevam um programa que utilize um loop for para imprimir todos os números pares de 1 a 20.
// for (let index = 0; index <=20; index += 2) {
//     console.log(index) 
// }

//Exemplo 2: Escrevam um programa que calcule a soma dos números de 1 a 100 usando um loop for.

// let soma = 0

// for (let index = 1; index <=100; index++) {
//     soma = soma + index
// }
// console.log(soma)

//Exemplo 3: Escrevam um programa que exiba a tabuada de um número inserido pelo usuário.

// let num = 5

//  for (let index = 1; index <=10; index++) {
//     soma = num * index
//     console.log(`O ${num} * ${index} = ${soma}`)
//  }

//Exemplo 4: Escreva um programa que calcule o fatorial de um número (5) inserido pelo usuário.

let num = 5
let fatorial =1

for (let index = 1; index <=5 ; index++) {
    fatorial = fatorial * index
}
console.log(`O fatorial de ${num} é igual a ${fatorial}`)
