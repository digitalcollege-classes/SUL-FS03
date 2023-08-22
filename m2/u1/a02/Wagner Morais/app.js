/*
let a = 1;
let b = 2
let c = 1

const cachorro = 1;

if (a+b < c) {
    console.log('A soma de a + b é menor que c')
} else {
    console.log('A soma de a + b é maior que c')
}
*/
// 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja "F" e
// estado civil seja "CASADA", solicitar o tempo de casada (anos).

/*
let a = 'F'
let b = 'Casada'
let c = 'Fernanda'

if (a =='F' && b =='Casada' && c == 'Fernanda') {
    console.log('Quantos anos é casada')
}
*/

// 3) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.
 
/*
let a = 18
let b = 2

if (a % b == 0){
    console.log('é par')
} 
else{
    console.log('ímpar')
}
 */

// 4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se
// somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se
// atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.

/*
let A = 2
let B = 2


if (A==B){
    let C = A+B
    console.log(C)
}
else{
    let C = A*B
    console.log(C)
}
*/

// 5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.

/*
let a = -2

if(a >= 0){
    console.log(a*2)
}
else{
    console.log(a*3)
}
*/
// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, utilizando as seguintes fórmulas:
// ● para homens: (72.7 * h) – 58;
// ● para mulheres: (62.1 * h) – 44.7. 

let h = 1.71;
let sexo = 'feminino'

if(sexo == 'masculino') {
    let batata = (72.7 * h) -58;
    console.log(batata.toFixed(2))
}else{
    let batata = (62.1 * h)-  44.7;
    console.log(batata.toFixed(2))
}
