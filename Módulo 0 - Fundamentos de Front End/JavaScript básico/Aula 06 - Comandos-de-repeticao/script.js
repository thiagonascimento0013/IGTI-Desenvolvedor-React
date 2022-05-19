console.log("Imprimindo de 1 a 5 com while");

var contador1 = 1;
while (contador1 <= 5) {
  console.log(contador1);
  contador1++;
}

console.log("Imprimindo de 1 a 5 com do while");

var contador2 = 1;
do {
  console.log(contador2);
  contador2++;
} while (contador2 <= 5);

console.log("Imprimindo de 1 a 5 com for");

var contador3 = 1;
for (var contador3 = 1; contador3 <= 5; contador3++) {
  console.log(contador3);
  if (contador3 === 3) {
    break;
  }
}
