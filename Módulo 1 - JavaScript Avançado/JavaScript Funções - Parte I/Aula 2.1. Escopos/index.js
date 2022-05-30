/* Variável com escopo global : É acessada de qualquer lugar do código ou seja dentro de uma condição ou for
const mensage = "Olá"

if(true) {

}
console.log(mensage);
*/

// ESCOPO DE BLOCO: É acessada apenas dentro da estrurura que foi declarada
if(true) {
	const mensage = "Olá"
	console.log(mensage);
}
//console.log(mensage); //ReferenceError: mensage is not defined

for (const color of ['verde','vermelho','amerelo']){
	const mensage = "Olá";
	console.log(color);
	console.log(mensage);
}

//console.log(color);
//console.log(mensage);

// EXEMPLO DE ESCOPO DE BLOCO COM VAR

if(true) {
	var count = 0;
	console.log(count);
}
console.log(count);

// EXEMPLO DE ESCOpO LOCAL COM VAR POREM SERÁ ESCOPO GLOBAL

function executar( ) {
	var text = "Escopo local com var";
	console.log(text);
}

executar();
//console.log(text); //ReferenceError: text is not defined

//EXEMPLO DE ESCOPO LOCAL COM LET E CONST
function executar2() {
	let txt = 0;
	const teste=2;

	function executar3() {}

	console.log(txt);
	console.log(teste);
	console.log(executar3);
}
executar2();
//console.log(txt); //ReferenceError: txt is not defined
//console.log(teste); //ReferenceError: txt is not defined
//console.log(executar3); //ReferenceError: txt is not defined

//ESCOPO ANINHADO
function executar3(){
	
	const txt = "Escopo alinhado";

	if(true){
		const name = "Carro";
		console.log(txt);
	}
	//console.log(name);//ReferenceError: name is not defined
}

executar3();

// EXEMPLO ESCOPO GLOBAL
let gName = "Thiago Nascimento"

console.log(gName);


// EXEMPLO DE HOISTING: Utilizar uma declaração antes mesmo de declarar a variável
printName();

function printName(){
	console.log("Nome: " + gName);
}