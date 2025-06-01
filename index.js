/**
 * Console API
 */

console.log("Aula inicial JS")

console.error("Falha na execução")

console.warn("Atenção!")

console.table([{
    nome: 'Daniela',
    turma: '02',
    disciplina: 'Prog JS'
},
{
    nome: 'Teste',
    turma: '02',
    disciplina: 'Prog JS'
}])

/**
 * Constantes e Variáveis
 */

//const - para informações que nunca mudam
// var ou let - para informações que podem mudar

//informações de dog que nunca mudam -- constantes sempre tem que ser declaradas:
const nome = 'Loki' // não pode mudar, se colocar ali abaixo const = nome = 'totó' iria dar erro
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// informacoes que mudam -- variáveis não são obrigadas a serem iniciadasa
//let tamanho // exemplo de variável não declarada
let tamanho = 'M' //-- variável declarada // String
let idade = 5 //Number
let peso = 10.5 //Number
let vacinado = true //Boolean
let castrado = false //Boolean


// hoisting -> içamento ou elevação ocorre com var principalmente
//let irmaos //= ["Thor", "Hela"]
//console.log(irmaos)
const irmaos = [
    {
        nome: "Thor",
        idade: 2
    },
    {
        nome: "Hela",
        idade: 3
    }
]
console.table(irmaos)

/**
 * Tipos de dados - cadeia, inteiro, real, logico, vetor, matriz
 * (funcoes - leia e escreva)
 * 
 * cadeia - String
 * inteiro/real - number
 * logico - boolean
 * vetor/matriz - array
 * 
 * undefined - sem valor nenhum (ainda não foi definido pelo usuário)
 * null - definido o valor null/vazio
 * 
 * bigInt = number para números extremamente grandes (com muitos caracteres)
 * symbol = 'identificador único'
 * 
 * 
 */

//Typescript - é uma variação do javascript que valida os tipos de variáveis

//exemplo coerção de tipo: (ele vai considerar o primeiro tipo informado (string)e vai 
// deduzir que o segundo também é string e vai concatenar)
//console.log("5" + 1)

/*
const valor = "50" // será considerado uma string
console.log(valor + 1)// será considerado uma string
console.log(number = "5" + "5" + 1)// será considerado uma string
console.log(1 + "5")// será considerado uma string
*/

/**
 * Strings
 */

//'Turma 02 do PGATS' - aspas simples ou single quote
//"Turma 02 do PGATS" - aspas duplas ou double quote
//`Turma 02 do PGATS` - template strings (crase)

const numeroAula = "03"
const turma = "02"
let data = "05 de abril"

console.log("Aula 03 da Turma " + turma + " no sábado dia 05 de abril")

//interpolação de strings (com crase) ajuda a ler melhor
console.log(`Aula ${numeroAula} da turma ${turma} no sábado dia ${data}`)

console.log(data.length)//conta a quantidade de carateres (nesse caso 11) se 
// for uma lista retorna a quantidade de itens na lista

//split - separar a string
const nomeDeAlunos = "Giuliana André Goku Lucas Lenilson" // string que será "separada"
const nomesDeAlunosSplit = nomeDeAlunos.split(" ")//regra para haver a separação, nesse caso, sempre que houver espaço " "
console.log(nomesDeAlunosSplit)//impressão dos dados separados

console.log(nomeDeAlunos.toLowerCase())//minúsculo
console.log(nomeDeAlunos.toUpperCase())//maiúsculo

console.log(nomeDeAlunos.includes("Dennys"))//esse includes seria para verificar se contém aquele dado, nesse caso é false
console.log(nomeDeAlunos.toLowerCase().includes("goku"))//aqui coloca tudo em minúsculo e verifica se contém a palavra, nesse caso retornará true

// Chai - biblioteca de asserções

console.log(nomeDeAlunos.replaceAll('a','i'))//aqui o replace serve para substituir, nesse caso o a por i

const conceitosLogica = "               inteiro real cadeia de caracteres...                   "
console.log(conceitosLogica.trim())//vai eliminar espaços no começo e final do que foi declarado

let dataParaCortar = "05 de abril"
/**
 * ele faz uma espécie de contagem:
 * 05 de abril
 * 0123456789 (como se fosse um vetor)
 */
console.log(dataParaCortar.slice(0,2)) //ele corta uma porção da string

const cpf = "45678945612"
console.log(cpf.slice(0,3))
console.log(cpf.slice(4,7))

const nome1 = "Amanda"//O método charAt() em JavaScript é usado para obter um 
// caractere específico de uma string, com base 
// na posição (índice) que você informa.
//indice: é um número que representa a posição do caractere que você 
// quer pegar (começa em 0).
//Se o índice for inválido (ex: maior que o tamanho da string), 
// ele retorna uma string vazia ("").

console.log(nome1.charAt(0)) // A
console.log(nome1.charAt(2)) // a
console.log(nome1.charAt(10)) // "" (índice fora do tamanho da string)