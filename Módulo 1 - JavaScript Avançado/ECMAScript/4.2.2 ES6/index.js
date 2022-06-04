/*------NOVIDADES ES6------ */

/*-------TEMPLATE STRINGS--------- */

//ES5
var nome = "Marina"
var idade = 19
var curso = "Computação"

var frase = nome + " tem " + idade + " anos \n e cursa " + curso;
console.log(frase);

//ES6
let nome1 = "Marina"
let idade1 = 19
let curso1 = "Computação"

let frase1 = `${nome1} tem ${idade1} anos 
e cursa ${curso1}`;
console.log(frase1);

/*-------------DESTRUCTING---------- */

//ES5
var carros = ["Uno", "Gol"];

var car1 = carros[0];
var car2 = carros[1];

//ES6
let[a,b] = ["Uno", "Gol", "Onix"];
console.log(a);
console.log(b);


//SWAP
[a,b] = [b,a];
console.log(a);
console.log(b);

const c1 = {modelo: "Onix", ano: 2019};

const {modelo, ano} = c1;

console.log(modelo);
console.log(ano);

const printCarInfo = ({modelo, ano}) => console.log(`Modelo: ${modelo}, Ano: ${ano}`);

printCarInfo(c1);

/*--------DEFAULT + REST + SPREAD------------------- */

//ES5
var soma6 = function(a,b) {
	if(a === undefined) a = 1;
	if(b === undefined) b = 1;
	return a + b;
}

// ES6
let soma7 = (a = 1, b = 1) => a + b;

// REST
function soma8(...valores) {
	return valores.reduce((anterior, atual) => {return anterior + atual});
}

console.log(soma8(10,10,10,10,10,10,10,20));
console.log(soma8(1));

// SPREAD - Operador de espalhamento
function soma9(a, b, c) {
	return a + b + c;
}

let numeros = [1, 2, 3];

console.log(soma9(...numeros));

/*---------FOR OF-------- */
// FOR OF - Arrays, Maps Strings, Sets
for(let numero of numeros) {
	console.log(numero);
}

/*---------FOR IN-------- */

for(let numero in numeros) {
	console.log(numero)
}

const Aluno4 = {
	nome: "Thiago",
	idade: 28,
	curso: "Anlálise de Sistemas",
	// Criação do iterator para o objeto
	[Symbol.iterator]: function* () {
		yield this.nome
		yield this.idade
		yield this.curso
	}
}

// FOR OF -> Navega nos valores, Não conseguimos fazer o FOR OF em objetos sem ter o Iterator.
for(let prop of Aluno4) {
	console.log(prop)
}

// FOR IN -> Navega nas propriedades do objeto
for(let prop in Aluno4) {
	console.log(prop)
}