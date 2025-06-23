// trabalho.js

// Função que retorna o nome do pet em maiúsculas
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// Verifica se pode ser adotado: idade 1 e porte 'M' (médio)
export function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === 'M';
}

// Calcula consumo de ração em gramas: peso * 300
export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

// Decide atividade baseada no porte
export function decidirTipoDeAtividadePorPorte(porte) {
  switch (porte.toLowerCase()) {
      case 'pequeno':
          return 'brincar dentro de casa';
      case 'm':
      case 'medio':
          return 'passear no parque';
      case 'grande':
          return 'correr no parque';
      default:
          return 'atividade indefinida';
  }
}

// Função assíncrona que retorna "Pipoca" após 100ms
export async function buscarDadoAsync() { 
  return new Promise((resolve) => {
      setTimeout(() => resolve('Pipoca'), 100);
  });
}


