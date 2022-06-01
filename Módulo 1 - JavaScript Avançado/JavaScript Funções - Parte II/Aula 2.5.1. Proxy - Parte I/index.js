let Carro = {
	proprietario: "Thiago",
	ano: 2016
};

const handler = {
	get(target, property, receiver) {
		console.log(`GET ${property}`);
		if(property in target) {
			return target[property];
		}
		return "Propriedade inexistente;"
}
}

let carroProxy = new Proxy(Carro, handler);

console.log(Carro.modelo);
console.log(carroProxy.modelo);

//EXEMPLO DE PROXY PARA TRADUTOR
let tradutor = {
	'Carro': 'Car',
	'Ano': 'Year'
};

let handlerTradutor = {
	get(target, property) {
		if(property in target) {
			return target[property];
		} else {
			return property;
		}
	},
	set(target, property, value) {
		if( typeof value == 'string') {
			target[property] = value;
			return true;
		}else {
			return false;
		}
	}
};

let tradutorProxy = new Proxy(tradutor, handlerTradutor);

console.log(tradutorProxy['Carro']);
console.log(tradutorProxy['Modelo']);

tradutorProxy["Modelo"] = "Model";
tradutorProxy["Marca"] = 123456;

console.log(tradutorProxy['Modelo']);
console.log(tradutorProxy['Marca']);

