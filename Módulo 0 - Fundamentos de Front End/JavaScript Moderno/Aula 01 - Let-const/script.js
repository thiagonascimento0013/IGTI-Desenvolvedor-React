// 1. Declarar variáveis com let e const
/*
let a = 1;
const b = 1;
a = 2;
//b = 2;

function teste() {
  for (var i = 0; i < 5; i++) {
    //fazer algo
  }
  for (let j = 0; j < 5; j++) {
    //fazer algo
    console.log("j: " + j);
  }
  console.log("i: " + i);
}
teste();
*/

/* Atribuição via desestruturação

let primos = [2, 3, 5, 7, 11, 13];

let curso = {
  nome: "Bootcamp Front End",
  modulos: 4,
  presencial: false,
  turma: 1,
};

let [p1, p2, ...resto] = primos;

let { nome: nomeCurso, turma, ...outrosCampos } = curso;

function imprime({ nome }) {
  console.log(nome);
}
*/

/* 3. Spread Operator

let primos = [2, 3, 5, 7, 11, 13];

let curso = {
  nome: "Bootcamp Front End",
  modulos: 4,
  presencial: false,
  turma: 1,
};

let primos2 = [...primos, 17];
let primos3 = [1, ...primos, 17];

let curso2 = {
  ...curso,
  descricao: "Bla bla bla",
  ativo: true,
};

let curso3 = {
  ...curso2, //clona a let curso
};
*/

// 4. Template literals

let a = 2,
  b = 3;
let soma = a + b;

console.log(`${a} + ${b} 
= ${soma}`);
