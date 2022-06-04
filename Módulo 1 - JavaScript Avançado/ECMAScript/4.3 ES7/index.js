/*------NOVIDADES ES7------ */

/*----------OPERADOR DE EXPONENCIAÇÃO-------- */
let r = 3;

let area = 3.14 * (r * r).toFixed(2);
// ou let area = Math.PI * r * r;
console.log(area);

let area1 = 3.14 * Math.pow(r,2);
// OU let area1 = Math.PI * Math.pow(r,2);
console.log(area1);

let area2 = 3.14 * (r ** 2);
// let area2 = Math.PI * (r ** 2);
console.log(area2);

let quadrado = 2;
//Operador pré-fixado
quadrado **= 2;

/*----------Array.prototype.includes() -------- */

console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(4));
console.log([1, 2, 3].includes(3,3));
console.log([1, 2, 3].includes(3,-1));
console.log([1, 2, NaN].includes(NaN));