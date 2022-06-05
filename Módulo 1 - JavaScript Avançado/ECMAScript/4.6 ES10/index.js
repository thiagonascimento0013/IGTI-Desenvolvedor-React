/*------NOVIDADES ES10------ */

/*
String.trimStart() -> Remove espaços desnecessários na frente de uma String
String.trimEnd()-> Remove espaços desnecessários atrás de uma String
*/

let email = "  teste@teste.com.br";
console.log(email)
console.log(email.trimStart());

let login = "testelogin  ";
console.log(login);
console.log(login.trimEnd());

/*------Parâmetro opcional do catch----- */

const api = new Promise((resolve, reject) => {
	if(Math.random() > 0.5) resolve("Sucesso")
	resolve("Falha");
})

async function request() {
	try {
		const retorno = await api;
		console.log(retorno);
	} catch {
		console.error(err);
	}
}

//request();

/*
Array.flat()-> Transversão do array
Array.flatMap()
*/

let arr = [1, 2, [3, 4]];
console.log(arr.flat());

let arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());

let arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));

let arr4 = [1, 2, [3, 4, [5, 6, [7, 8, 9, 10]]]];
console.log(arr4.flat(Infinity));

let arr5 = [1, 2, 3, , 5];
console.log(arr5);
console.log(arr5.flat());