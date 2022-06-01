//EXEMPLO DE CURRYING: transformar uma função em várias funções que recebe um parâmetro

function log(date, type, message) {
	console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] [${type}] [${message}]`);
}

log(new Date(), "DEBUG", "Exemplo de currying");

const logCurrying = date => type => message => {
	console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] [${type}] [${message}]`);
}

logCurrying(new Date())("DEBUG")("Exemplo de currying");

let logNow = logCurrying(new Date());

logNow("DEBUG")("Exemplo de currying com parâmetro fixo");

let logDebugNow = logNow("DEBUG");

logDebugNow("Exemplo de nova função por currying com parâmetros fixos");