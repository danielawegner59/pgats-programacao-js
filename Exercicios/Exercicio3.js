/**
 * Exercício Individual
Programação para Automação de Testes
Hands-on
Validador de idade mínima para adoção
Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.
Use os operadores adequados e exiba:
Nome do dog
Idade
Se está apto ou não para adoção
Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, 
pode ser adotado independente da idade.

Exemplos:
mínimo = 2

idade 1 + porte M = não
idade 2 + porte M = sim, pela Idade
idade 3 + porte P = sim, pela Idade
idade 4 + porte P = sim, pelo porte
 */
const nome = 'Rex'
const idade = 4

//const adocao = idade < 2 ? 'não' : 'sim' -- até aqui seria uma opção sem o exercício extra
const porte = 'P'
const idadeMinima = 2

const adocao = idade >= idadeMinima || porte === 'P' //-- os || são operadores lógicos OU
			? 'sim'
            : porte === 'P'
			? 'sim' 
            : 'não'
console.log(adocao) //-- aqui outra opção de fazer o exercício com as variáveis ali     

const adocaov2 = idade >= idadeMinima || porte === 'P'     

console.log(adocao)
console.log(adocaov2)

//disso pode nascer uma função:
function verificarSePodeSerAdotado(idade, porte){
    const adocao = idade >= idadeMinima || porte ==='P'
    ? 'sim'
    : porte === 'P'
    ? 'sim' 
    : 'não'
//return adocao    
console.log(adocao)
}

/*
idade 1 + porte M = não
idade 2 + porte M = sim, pela Idade
idade 3 + porte P = sim, pela Idade
idade 4 + porte P = sim, pelo porte
 */

verificarSePodeSerAdotado(1, 'M')
verificarSePodeSerAdotado(2, 'M')
verificarSePodeSerAdotado(2, 'P')
verificarSePodeSerAdotado(1, 'P')