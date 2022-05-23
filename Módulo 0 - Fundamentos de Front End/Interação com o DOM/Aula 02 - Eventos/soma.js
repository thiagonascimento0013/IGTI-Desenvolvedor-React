var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var r = document.getElementById("r");

function soma() {
  var resultado = n1.valueAsNumber + n2.valueAsNumber;
  r.textContent = isNaN(resultado) ? "" : resultado;
}

document.addEventListener("input", soma);

/* Forma alternativa de código
document.addEventListener('input', function( ) {
  var resultado = n1.valueAsNumber + n2.valueAsNumber;
  r.textContent = isNaN(resultado) ? '' : resultado;
});
*/
