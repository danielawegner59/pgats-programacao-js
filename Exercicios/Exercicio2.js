/**
 * Validador de nomes para as tags
 * Alguns donos estão registrando os dogs com nomes mal formatados. 
 * Crie um script para limpar e padronizar os nomes.
 * 
 * Aplique as formatações e exiba:
 *  - O nome original, como foi cadastrado
 *  - O nome formatado
 * 
 * Extra aplique uma regra que configra se o nome informado possui apenas uma 
 * palavra. Exiba se o nome é válido ou não.
 * 
 * Outro exercício - 03:
 * Repita o processo feito em aula e crie um novo repositório no GitHub. Crie
 * o repositório, conecte ao seu projeto local e depois suba os arquivos.
 */

const nomeDog = "tH    oR@!%   "
//let nomeFormatado = nomeDog.replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ]/g, "");
//nomeFormatado = nome

let nomeFormatado = removerCaracteresEspeciais(nomeDog)
nomeFormatado = nomeFormatado.charAt(0).toUpperCase() + nomeFormatado.slice(1,nomeFormatado.length).toLowerCase() //aqui 
// o length foi aplicado para pegar o "resto" da palavra, não foi para contar. Está pegando do segundo caractere 
// (índice 1) até o final da string.
//nomeFormatado.length é o comprimento total da string, então isso equivale a "até o final".
// esta função faz com que a primeira letra fique maiúscula e o restante minúsculo

console.log(nomeDog)
console.log(nomeFormatado)

function removerCaracteresEspeciais(nome) {
    return nome.replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ]/g, "");
}//O que esse código faz?
//replace(): substitui partes de uma string.

// /[^a-zA-ZÀ-ÿ]/g: é uma expressão regular. também conhecida como 
// regex, que é uma sequência de caracteres que forma um padrão de pesquisa.
//g: é a flag de "global", ou seja, aplica a regra em toda a string.
//[^...]: o ^ dentro dos colchetes significa "tudo que NÃO está dentro da lista".
//a-zA-ZÀ-ÿ: isso representa todas as letras minúsculas, maiúsculas e acentuadas do alfabeto latino.

//e esse trecho replace(/\s+/g, "") também é uma expressão regular, e serve para remover todos os 
// espaços em branco da string — incluindo espaços simples, quebras de linha, tabulações, etc.
// Explicando cada parte:
//replace(): método que substitui partes da string.
// /\s+/g: é a expressão regular usada.
// \s = qualquer caractere de espaço em branco:
//espaço ( )
//tabulação (\t)
//quebra de linha (\n)
//retorno de carro (\r)
//espaço vertical, etc.
//+ = um ou mais desses caracteres seguidos.
//g = flag "global", ou seja, aplicar em toda a string.
//"": é o valor de substituição — uma string vazia (remove os espaços).
//Se você quiser remover apenas espaços normais (e não quebras de linha ou tabulação), pode usar:
//.replace(/ /g, "")
//Ou, para substituir múltiplos espaços por um só (sem remover completamente):
//.replace(/\s+/g, " ")


teste.trim