/**
 * Calculadora de ração diária
 * 
 * Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. Calcule a quantidade de ração com base
 * na seguinte fórmula:
 * 
 * Gramas por dia = Peso x 30 gramas
 * 
 * Exiba:
 * Nome do dog
 * Peso
 * Quantidade de ração recomendada por dia
 * Quantos dias o estoque atual vai durar
 */

// ALTERNATIVA 1, simplificado sem Função

let nome = 'Bob'
let peso = 10
let estoque = 5000

const gramasPorDia = peso * 30
const duracaoEstoque = Math.floor(estoque / gramasPorDia)

console.log(`Nome do dog: ${ nome }`)
console.log(`Peso: ${ peso }kg`)
console.log(`Gramas por dia: ${ gramasPorDia } gramas` )
console.log(`O estoque vai durar: ${ duracaoEstoque }`)

// ALTERNATIVA 2, usando função com parâmetros

function calcularConsumoDeRacao(nome, peso, estoque) {
    const gramasPorDia = peso * 30
    const duracaoEstoque = Math.floor(estoque / gramasPorDia)

    console.log(`---------------------------`)
    console.log(`Nome do dog: ${nome}`)
    console.log(`Peso: ${peso}kg`)
    console.log(`Gramas por dia: ${gramasPorDia} gramas` )
    console.log(`O estoque vai durar: ${duracaoEstoque} dias`)
    console.log(`---------------------------`)
}

calcularConsumoDeRacao('Ada', 1, 2000)
