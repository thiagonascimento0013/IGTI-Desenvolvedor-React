var m = "Olá";
imprimeoOla();

function imprimeoOla() {
  var nome = "Thiago";
  console.log(m);
  console.log(nome);
  imprimeoOla2();

  function imprimeOla2() {
    console.log(m);
    console.log(nome);
  }
}
