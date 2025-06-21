/*

  operadores = comparacao, logica, aritmÃ©tica

    VALOR A maior que VALOR B
    VALOR A menor que VALOR B

    == -> VARIAVEL A 'possui o mesmo valor que' VARIAVEL B 
    === -> VARIAVEL A 'possui o mesmo valor E possui o mesmo tipo de dado que' VARIAVEL B

  >   - maior que
  >=  - maior ou igual que
  <   - menor que
  <=  - menor ou igual que
  ==  - igualdade somente de valores
  !=  - diferença somente de valores
  === - igualdade de valores e tipo de dado
*/


const valido = verificarSeONomeEValido(nomeFormatado)

console.log(nomeDog)
console.log(nomeFormatado)
console.log(valido)

function removerCaracteresEspeciais(nome) {
  // return nome.replace(/[^a-zA-ZÃ€-Ã¿]/g, "");
  return nome.replace(/[^a-zA-ZÃ€-Ã¿\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

function verificarSeONomeEValido(nome) { 
  return nome.split(" ").length === 1
}