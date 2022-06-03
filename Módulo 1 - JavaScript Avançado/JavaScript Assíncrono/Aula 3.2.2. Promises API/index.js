// EXEMPLO Promise.race - Corrida de promises, qual retorna primeiro?

/*const p5 = Promise.race([
	new Promise(resolve => setTimeout(resolve, 2000, "P1")),
	new Promise((resolve, reject) => setTimeout(reject, 3000, "P2"))
]);

p5.then(result => console.log(result));
p5.catch(error => console.error(error));*/

// EXEMPLO Promise.race - Várias promises com rejeição
/*const p6 = Promise.race([
	new Promise(resolve => setTimeout(resolve, 3000, "P1")),
	new Promise((resolve, reject) => setTimeout(reject, 2000, "P2")),
	new Promise(resolve => setTimeout(resolve, 4000, "P3"))
])

p6.then(result => console.log(result));
p6.catch(error => console.error(error));*/

// EXEMPLO Promise.race
/*function showStatus() {
	console.log("Aguarde dados sendo carregados.....");
}

function timeout(delay, result) {
	return new Promise(resolve => {
		setTimeout(() => resolve(result), delay);
	})
}

function getCarInfo (car) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(`Car details: ${car}`), Math.floor(600*Math.random))
	});
}

function showCarInfo(car) {
	return getCarInfo(car).then(info => {
		console.log(`Car info: ${car}`)
		return true;
	})
}

Promise.race([showCarInfo("Palio"), timeout(3000)])
.then( displayed => { if(!displayed) showStatus()});*/

// EXEMPLO Promise.allSettled
/*const p8 = Promise.allSettled([
	new Promise(resolve => setTimeout(resolve, 3000, "P1")),
	new Promise((resolve, reject) => setTimeout(reject, 2000, "P2")),
	new Promise(resolve => setTimeout(resolve, 4000, "P3"))
])

p8.then(result => console.log(result))
p8.catch(error => console.error(error))*/

// EXEMPLO Promise.any -> Retorna a 1º promise fulfilled/realizada/resolvida
const p9 = Promise.any([
	new Promise(resolve => setTimeout(resolve, 5000, "P1")),
	new Promise((resolve, reject) => setTimeout(reject, 100, "P2")),
	new Promise(resolve => setTimeout(resolve, 4000, "P3"))
])

p9.then(result => console.log(result))
p9.catch(error => console.error(error))