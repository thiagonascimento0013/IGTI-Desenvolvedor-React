/*------NOVIDADES ES8------ */

/*------SPRING PADDINGS------ */
// Serve para adicionar ou substituir informações em uma determinada string
// padStart -> Adicionana espaços na frente da string
// padEnd -> Adiciona espaçoes atrás da string

console.log("IGTI".padStart(1));
console.log("IGTI".padStart(6));

console.log("IGTI".padEnd(4));
console.log("IGTI".padEnd(7));

console.log("IGTI".padStart(6, "T"));
console.log("IGTI".padStart(6, "THI"));

console.log("IGTI".padEnd(6,"T"));
console.log("IGTI".padEnd(6, "THI"));

console.log("IGTI".padEnd(7,"T"));
console.log("IGTI".padEnd(7, "THI"));
console.log("IGTI".padEnd(13, "THI"));

/*---Object.Entries(), Object.Values(), Object.getOwnPropertyDescriptors------ */
// Object.Entries() -> Cria um array com propriedade e valor dos objetos
// Object.Values() -> Cria um array com todos os valores do objeto
// Object.getOwnPropertyDescriptors() -> Cria um array com 
const tipoLogradouro = {
	A: "Area",
	AER: "Aeroporto",
	AL: "Alameda",
	AV: "Avenida",
	BC: "Beco",
	R: "Rua"
}

console.log(Object.entries(tipoLogradouro));

console.log(Object.values(tipoLogradouro));

let endereco = {logradouro: "Brasil"}
console.log(Object.getOwnPropertyDescriptors(endereco, "logradouro"));

/*----------TRAILING COMMAS------ */
//  Desconsidera vírgulas desnecessárias no código

function Carro (arg1, arg2, arg3,) {

}

Carro("Fiat", "Palio", 2019,);