// Lados de um triangulo
const prompt = require("prompt-sync")()
const ladoA = Number(prompt("Insira o tamanho do lado A:"))
const ladoB = Number(prompt("Insira o tamanho do lado B:"))
const ladoC = Number(prompt("Insira o tamanho do lado C:"))

const somaA = ladoA + ladoB
const somaB = ladoB + ladoC
const somaC= ladoC + ladoA

if ( ladoC <= somaA && ladoB <= somaC && ladoA <= somaB ) {
    console.log(`Lados podem formar um triângulo`)
    if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
        console.log(`Equilatero`)
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
        console.log(`Escaleno`)
    } else {
        console.log(`Isósceles`)
    }


} else {
    console.log(`Lados não podem formar um triângulo`)
}
