/*------ASYNC AWAIT------ */

const api = new Promise((resolve, reject) => {
	if(Math.random() > 0.5) resolve("Sucesso")
	resolve("Falha");
})

function request() {
	api
	.then(console.log)
	.catch(console.error);
}

request();

async function request1() {
	const retorno = await api;
	console.log(retorno);
}

request1();

async function request2() {
	try {
		const retorno = await api;
		console.log(retorno);
	} catch(err) {
		console.error(err);
	}
	
}

request2();

function base2s(x) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(2 ** x);
		}, 2000)
	})
}

base2s(10).then((r) => {console.log(r)});

let sum = base2s(1) + base2s(2) + base2s(3);

console.log(sum);

// SOLUÇÃO 1
base2s(1).then((r) => {
	console.log(r + base2s(2).then((r) => {
		console.log(r + base2s(3).then((r) => {
			console.log(r)}))
	}))
})

// SOLUÇÃO 2

function somaPromises() {
	return new Promise((resolve) => {
		base2s(1).then((a) => {
			base2s(2).then((b) => {
				base2s(3).then((c) => {
					resolve(a+b+c);
				})
			})
		})
	})
}

somaPromises().then((y) => {console.log("Solução 2:", + y)});

// SOLUÇÃO ASYNC + AWAIT
async function somaPromisesA() {
	const a = await base2s(1);
	const b = await base2s(2);
	const c = await base2s(3);

	return a + b + c;
}

somaPromisesA().then((s) => {console.log("Solução async + await: " + s)});