/*------NOVIDADES ES11------ */

/*
BigInt -> Novo tipo primitivo numérico do JavaScript
*/
console.log(Number.MAX_SAFE_INTEGER);

let b = 1n;
let c = BigInt(2);

console.log(1234567890123456789n);

let sum = b + c;
console.log(sum);

/*
Promise.alSettled() -> Retorna todas as promessas independente se foi rejeitada ou não.
*/
// AULA JAVASCRIPT ASSINCRONO

/*
globalThis -> Padroniza em todas as interfaces
*/
// window no navegador
// global no Node.js

/*
Opcional Chaining -> Validar se determinada propriedade existe
*/

const entity = {
	car: {
		model: "Palio",
		owner: {
			name: "Thiago",
			age: 28,
			//lastName: "Nascimento"
		},
		brand: "Fiat"
	}
}

//Validações anteriores para recuperar a propriedade lastName
if (entity.car && entity.car.owner && entity.car.owner.lastName) {
	console.log(entity.car.owner.lastName);
}

let lastName = entity.car.owner && entity.car.owner.lastName;

// Melhoria do opcional chaining
let lastName2 = entity.car?.owner?.lastName;
console.log(lastName2);

/*
Nullish coalescing operator-> Busca uma propriedade e caso ela não exista, 
é repassado um valor opcional.
*/
const chassi = entity.car.chassi || "9B123456789";
console.log(chassi);

let request = {
	header: {
		type: "",
		timeout: 0,
		active: false,
	},
}

console.log(request.header.type || "GET");
console.log(request.header.timeout || 300);
console.log(request.header.active || true);

// Preseva o valor preenchido
console.log(request.header.type ?? "GET");
console.log(request.header.timeout ?? 300);
console.log(request.header.active ?? true);