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