// 02) Tendo como dados de entrada a altura e o sexo de uma pessoa,
// construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// - para homens: (72.7 * h) - 58;
// - para mulheres: (62.1 * h) - 44.7.

let h = 1.71
let sexo = 'masculino'

if (sexo == 'masculino') {
    let batata = (72.7 * h) - 58;
    console.log(batata.toFixed(2))
}else {
    let batata = (62.1 * h) - 44.7;
    console.log(batata.toFixed(2))
}