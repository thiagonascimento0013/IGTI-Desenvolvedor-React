// EXEMPLO 4 - ENCADEAMENTO DE THEN E O CATCH

const p4 = new Promise((resolve, reject) => {
	if(Math.random() > 0.5) {
		resolve("Sucesso P4");
	} else {
		reject("Falha P4");
	}
});

p4
.then(function acao1 (res) {console.log(`${res} da acao 1`); return res})
.then(function acao2 (res) {console.log(`${res} da acao 2`); return res})
.then(function acao3 (res) {console.log(`${res} da acao 3`); return res})
.catch(function erro(rej) {console.error(rej)});


// EXEMPLO 5 - ENCADEAMANTO DE CATCHs
const p5 = new Promise((resolve, reject) => {
	if(Math.random() > 0.5) {
		resolve("Sucesso P5");
	} else {
		reject("Falha P5");
	}
});

p5
.then(function acao1 (res) {console.log(`${res} da acao 1`); return res})
.catch(function erro1 (rej) {console.error("Erro no primeiro catch")})
.then(function acao2 (res) {console.log(`${res} da acao 2`); return res})
.then(function acao3 (res) {console.log(`${res} da acao 3`); return res})
.catch(function erro2 (rej) {console.error("Erro no segundo catch")});

// EXEMPLO 6 - ENCADEAMENTO DE CATHs DIRETAMENTE A PRIMEIRA PROMISE, OS DOIS SÃO EXECUTADOS;

const p6 = new Promise((resolve, reject) => { 
	if(Math.random() > 0.5) {
		resolve("Sucesso P6");
	} else {
		reject("Falha no P6");
	}
})

p6
.catch(function erro1(rej) {console.error("Erro no primeiro cath P6"); return rej})
.catch(function erro2(rej) {console.error(rej); return rej});

p6
.then(function acao1 (res) {console.log(`${res} da acao 1`); return res})
.then(function acao2 (res) {console.log(`${res} da acao 2`); return res})
.then(function acao3 (res) {console.log(`${res} da acao 3`); return res})

// EXEMPLO 7 - ENCADEAMENTO DE THENs E CATCHs com EXEÇÃO DO MEIO DO FLUXO

const p7 = new Promise((resolve, reject) => { 
	if(Math.random() > 0.5) {
		resolve("Sucesso P7");
	} else {
		reject("Falha no P7");
	}
})

p7.catch(function erro1(rej) {console.error("Erro no primeiro cath P7"); return rej});

p7.then(function acao1 (res) {console.log("Promessa rejeitada na ação 1"); throw new Error('Erro')})
.catch(function erro2(rej) {console.error("Tratamento das rejeições em P7")})
.then (function acao2 (res) {console.log(`${res} da ação 2`); return res})
.then (function acao3 (res) {console.log(`${res} da ação 3`); return res})
.catch (function (rej) {console.error("Tratamento das rejeições em ação 2 ação 3")});