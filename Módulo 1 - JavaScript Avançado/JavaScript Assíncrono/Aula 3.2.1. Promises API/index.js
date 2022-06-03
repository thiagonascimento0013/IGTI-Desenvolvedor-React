//EXEMPO Promise.resolve
const p1 = new Promise((resolve) => {
	resolve(console.log(""));
});

Promise.resolve(console.log("Sempre será resolvida"));

// EXEMPLO DE Promise.reject
//Promise.reject(console.log("Sempre será rejeitada"));

// EXEMPLO Promisse .all-> Aguarda todas as promises executarem, ou caso alguma dê negativa, já retorna o resultado
/*Promise.all([
	new Promise(resolve => setTimeout(resolve, 1200, "P1")),
	new Promise(resolve => setTimeout(resolve, 700, "P2")),
	new Promise(resolve => setTimeout(resolve, 2900, "P3"))
]).then(results => results.data[0].name)
.then(name => console.info(name))
.catch(erro => console.error(`Exceção lançada na: ${erro}`));*/

//EXEMPLO 2 Promisse.all -> Sucesso na execução de todas as promises
/*Promise.all([
	new Promise(resolve => setTimeout(() => resolve([]), 1200)),
	new Promise(resolve => setTimeout(() => resolve([10]), 700)),
	new Promise(resolve => setTimeout(() => resolve([3,4]), 2900))
]).then(results => results.length)
.then(size => console.info(size))
.catch(erro => console.log(erro));*/

// EXEMPLO Promise.all -> Uma das promises será rejeitada
Promise.all([
	new Promise(resolve => setTimeout(() => resolve([]), 2800)),
	new Promise((resolve, reject) => setTimeout(() => reject([10]), 1200)),
	new Promise(resolve => setTimeout(() => resolve([3,4]), 800))
]).then(results => results.length)
.then(size => console.info(size))
.catch(erro => console.error(erro));
