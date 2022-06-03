//EXEMPLO FUNÇÃO GERADORA
function getIdNormal(range) {
	let i = 0;
	while(i< range) {
		i +=1;
		return i;
	}
}

function* getID(range) {
	let i = 0;
	while(i< range) {
		i +=1;
		yield i;
	}
}

let it = getID(3);

console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//FOR OF
let it2 = getID(3);
for (const item of it2) {
	console.log(item);
}

function* getUniqueID() {
	let i = 0;
	while(true) {
		i++;
		yield i;
	}
}

const cars = {};
const idCarsGenerator = getUniqueID();

function addCar(car) {
	const id = idCarsGenerator.next().value;
	cars[id] = {id, car};
}

addCar('Palio');
addCar('Fox');
addCar('Mobi');
addCar('HB20');
addCar('BMW');
addCar('Ferrari');

console.log(cars);

const carModelAll = {
	allModel: {
		'Fiat': [
			'Palio',
			'Cronos',
			'Toro'
		],
		'Volksvagem': [
			'Gol',
			'Up',
			'Nivus',
			'Tiguan'
		],
		'Chevrolet': [
			'Onix',
			'Tracker',
			'Corsa'
		]
	},
	[Symbol.iterator]() {

		const brands = Object.values(this.allModel);

		let currentModelIndex = 0;
		let currentBrandIndex = 0;

		return {
			next() {

				// Lista de todos os modelos da marca
				const models = brands[currentBrandIndex];
				//Verifico se já navegou em todos os modelos da marca e passa para a próxima
				if(!(currentModelIndex < models.length)) {
					currentBrandIndex++;
					currentModelIndex=0;
				}
				//Verifica se já navegou em todas as marcas
				if(!(currentBrandIndex < brands.length) ){
					return {
						value: undefined,
						done: true
					}
				}

				return {
					value:brands[currentBrandIndex][currentModelIndex++],
					done: false
				}
			}
		}
	},
	//O Caracter "* antes ou depois do nome informa que é uma função geradora
	*carGenerator() {
		const brands = Object.values(this.allModel);
		let currentBrandIndex = 0;

		while(currentBrandIndex < brands.length) {
			yield* brands[currentBrandIndex];
			currentBrandIndex++;
		}
	}
}

let itA = carModelAll.carGenerator();

console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());

for(const car of carModelAll.carGenerator()) {
	console.log(car);
}

//Destructing

itB = carModelAll.carGenerator();

console.log([...itB]);