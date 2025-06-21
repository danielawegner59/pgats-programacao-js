/**
 * Exercício 1:
 * Gerador de tags de identificação
 * Crie um script para gerar a etiqueta (tag) de identificação que será 
 * presa na coleira de um cachorro no abrigo. O dono irá informar 
 * nome, idade, peso, raça e se é adotado ou não.
 * A tag deve ter:
 * - O nome em letras maiúsculas
 *  - A raça com a primeira letra maiúscula
 *  - Peso
*/
numero = "5"
console.log(numero * 2)

const nome = "Dogo", raca = "vira-lata" 
let idade = 1, peso = 1.2, adotado = true

let nameUpperCase = nome.toUpperCase()
//let racaFirsletter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()
let racaFirsletter = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase()


const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirsletter
}]

console.log(animal)