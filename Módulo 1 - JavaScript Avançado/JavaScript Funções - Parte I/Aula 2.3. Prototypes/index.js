function Pessoa (nome) {
	if(!nome) this.nome = "Fulano";
	else this.nome = nome;

	this.dizerOla = () => console.log(this.nome + "diz: Olá!");
}

let pessoaA = new Pessoa("Thiago");

Pessoa.digaOla = function () {
	console.log("Olá, meu nome é: " + this.nome)
};

let pessoaB = new Pessoa("Alvaro");

console.log("---------------------");
try {
	pessoaA.digaOla();
} catch (e) {
	console.log("Falha no pessoaA.digaOla");
}
try {
	pessoaB.digaOla();
} catch (e) {
	console.log("Falha no pessoaB.digaOla");
}
console.log("---------------------");

pessoaB.digaOla = funcion() {
	console.log("Meu nome é: " + pessoaB.nome);};

try {
	pessoaA.digaOla();
} catch (e) {
	console.log("Falha no pessoaA.digaOla");
}
try {
	pessoaB.digaOla();
} catch (e) {
	console.log("Falha no pessoaB.digaOla");
}
console.log("---------------------");

Pessoa.prototype.digaOla = function() {
	console.log("Olá, eu sou o: " + this.nome);
};

let pessoaC = new Pessoa("Ana");

console.log("---------------------");
try {
	pessoaA.digaOla();
} catch (e) {
	console.log("Falha no pessoaA.digaOla");
}
try {
	pessoaB.digaOla();
} catch (e) {
	console.log("Falha no pessoaB.digaOla");
}
try {
	pessoaC.digaOla();
	} catch (e) {
		console.log("Falha no pessoaC.digaOla");
}

Pessoa.prototype.dizerOla = function() {
	console.log(this.nome + "Vou dizer outro olá");
}

pessoaB.dizerOla = function() {
	console.log(this.nome + "Consigo dizer outro olá!")
}

console.log("---------------------");
try {
	pessoaA.dizerOla();
} catch (e) {
	console.log("Falha no pessoaA.dizerOla");
}
try {
	pessoaB.dizerOla();
} catch (e) {
	console.log("Falha no pessoaB.dizerOla");
}
try {
	pessoaC.dizerOla();
	} catch (e) {
		console.log("Falha no pessoaC.dizerOla");
}