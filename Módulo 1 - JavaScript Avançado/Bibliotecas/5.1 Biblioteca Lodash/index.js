import _ from 'lodash';

let cars = ["Palio", "Uno", "Gol", "Saveiro", "HB20", "Creta", "Nivus"];

//Retornar o primeiro e último elemento do array
console.log(_.first(cars));
console.log(_.last(cars));

//Retornar o nth elemento do array
console.log(_.nth(cars, -3));

//Retornar um elemento aleatório
console.log(_.sample(cars));

//Embaralhar o array
console.log(_.shuffle(cars));
//console.log(_.shuffle(cars));
console.log(cars);

//Gerar um número aleatório
console.log(_.random(10));
console.log(_.random(5, 10));

//Repetir a execução de uma função
_.times(3, () => {
	console.log("Repetição");
})

//Atrasar a execução de uma função
_.delay(() => {
	console.log("Atrasada")
}, 150);

//Validar tipos de variáveis
let a = 1;
let b = "Carro";
let c = [1, 2];
let d = {name: "Thiago"};

console.log(_.isNumber(d));
console.log(_.isString(c));
console.log(_.isArray(b));
console.log(_.isObject(a));

//Obter o mínimo e máximo de um array
let numbers = [-4, 3, 0, 1, 32, -12, 9];

console.log(_.min(numbers));
console.log(_.max(numbers));
console.log(_.sum(numbers));

//Curry
function log(date, type, message) {
	console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);
}

const logCurring = _.curry(log);
