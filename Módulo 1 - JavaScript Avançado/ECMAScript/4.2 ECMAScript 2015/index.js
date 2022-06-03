/*---------- LET + CONST----------*/

//ES5
if(true) {
	var v = "Aula"
}
console.log(v);

//ES6
if(true) {
	let x = "Aula"
}
//console.log(x);

const PI = 3.141595;
console.log(PI);
//PI = 3.15; //TypeError: Assignment to constant variable.

//Em constantes conseguimos alterar os valores das propriedades dos objetos
const Aluno = {
	nome: "Thiago",
	sobrenome: "Nascimento"
}

console.log(Aluno.nome);

Aluno.nome = "Alvaro"
console.log(Aluno.nome);

//Aluno = {	nome: "Julia", sobrenome: "Silva"} //TypeError: Assignment to constant variable.

/*------------ARROW FUNCTION------------------- */ 

//ES5
var soma = function(a, b) {
	return a + b;
}
function soma2(a, b){
	return a+ b;
}

//ES6
let soma3 = (a, b) => {	return a + b};

let soma4 = (a, b) => a + b;

let log = () => {console.log("Erro")};

const Aluno2 = {
	nome: "Gael",
	getAluno: function() {return console.log(this)}
}

Aluno2.getAluno();

const Aluno3 = {
	nome: "Gael",
	getAluno: () => {return console.log(this)} //Quando se usa o this dentro de arrow function, o mesmo perde a referência
}

Aluno3.getAluno();

/*-------CLASSES---------*/

//ES5
function Carro(marca) {
	this.marca = marca;
}
Carro.prototype.getMarca = function a() {};


//ES6
class Carro {
	constructor(marca) {
		this.marca = marca;
	}
	getMarca() {
		return this.marca;
	}
}

class Veiculo {
	constructor(marca, modelo) {
		this.marca = marca;
		this.modelo = modelo;
	}
	getMarca() {
		return this.marca;
	}
	getModelo() {
		return this.modelo;
	}
}

class Carro extends Veiculo {
	constructor(marca, modelo, estepe) {
		super(marca, modelo);
		this.estepe = estepe;
	}
	getInfo() {
		return console.log("Marca: " + super.getMarca() + ", Modelo: " + super.getModelo());
	}
}