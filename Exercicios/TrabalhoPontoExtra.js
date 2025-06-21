// Lista original com números e strings
const listaOriginal = [13, 'Totó', 7, 'Nico', 1, 'Marley', 15];

// Função que filtra apenas os números
function filtrarNumeros(lista) {
  return lista.filter(item => typeof item === 'number');
}

// Chamada da função e armazenamento do resultado
const listaFiltrada = filtrarNumeros(listaOriginal);

// Impressão no terminal
console.log("Lista original:", listaOriginal);
console.log("Apenas números:", listaFiltrada);

function contarVogais(texto) {
  var contador = 0;
  var vogais = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];

    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

//--------------------------------------------------------------------------------
/*
function contarVogais(texto) {
    var contador = 0;
    var vogais = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i < texto.length; i++) {
      var letra = texto[i];
  
      if (vogais.includes(letra)) {
        contador++;
      }
    }
  
    return contador;
  }
  
  // Texto de exemplo
  var texto = "Este é um texto buscando o Totó no veterinário";
  
  // Chamada da função e impressão
  var resultado = contarVogais(texto);
  console.log(`Texto:", ${texto}`);
  console.log(`Número de vogais:", ${resultado}`);
*/
  //-----------------------------------------------------------------------
  function contarVogais(texto) {
    // Regex que considera vogais normais, com acento e maiúsculas
    var resultado = texto.match(/[aeiouáéíóúâêôãõàAEIOUÁÉÍÓÚÂÊÔÃÕÀ]/g);
    return resultado ? resultado.length : 0;
  }
  
  // Texto de exemplo
  var texto = "Este é um texto buscando o Totó no veterinário";
  
  // Chamada da função e impressão
  var total = contarVogais(texto);
  console.log(`Texto:", ${texto}`);
  console.log(`Número de vogais (incluindo acentuadas e maiúsculas):", ${total}`);