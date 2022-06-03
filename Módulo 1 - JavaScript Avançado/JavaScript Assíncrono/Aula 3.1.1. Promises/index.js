//1º FORMA DE DECLARAR PROMISSE
const p1 = new Promise((resolve, reject) => {
		setTimeout(() => resolve("Sucesso P1"), 2000)
});

p1.then((res) => {console.log(res)}, (rej) => {});

//2º FORMA DE DECLARAR PROMISSE
new Promise((resolve, reject) => {
	setTimeout(() => resolve("Sucesso P1"), 2000)
}).then((res) =>{console.log(res)}, (rej) => {});

// EXEMPLO DE CRIAÇÃO DE PROMISSE E O USO DO CATH
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("Sucesso P2"), 2000)
});

//1º FORMA DE USAR O CATCH
p2.then((res) => {console.log(res)});
p2.catch((rej) => {});

// 2º FORMA DE USAR O CATCH
p2.then((res) => {console.log(res)}).catch((rej) => {});

// EXEMPLO 3 - PROMISES COM O CATCH E O UNICO CATCH PARA TODAS AS REJEIÇOES
const p3 = new Promise((resolve, reject) => {
	//Math.random: Número aleatório
	if(Math.random() > 0.5){
		resolve("Sucesso P3")
	} else {
		reject("Falha P3");
	}
});

p3.then(console.log).catch(console.error);