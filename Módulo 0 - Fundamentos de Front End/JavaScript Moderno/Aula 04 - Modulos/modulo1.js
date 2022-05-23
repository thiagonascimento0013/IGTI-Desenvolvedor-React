// As declarações de um módulo não são globais,
//elas estão restritas dentro do módulo em que foram , a menos que sejam exportadas.

export function soma(a, b) {
  return a + b;
}

export function subtrai(a, b) {
  return a - b;
}

console.log("Carregou modulo 1");
