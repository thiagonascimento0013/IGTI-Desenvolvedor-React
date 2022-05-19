function maior(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

//Expressão ternária: O valor antes dos ":" é caso a condição for verdadeira
// O valor depois dos ":" é caso a condição for falsa
function menor(a, b, c) {
  var r = a < b && a < c ? a : b < a && b < c ? b : c;
  return r;
}

function formataMes(mes) {
  switch (mes) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    case 5:
      return "Maio";
    case 6:
      return "Junho";
    case 7:
      return "Julho";
    case 8:
      return "Agosto";
    case 9:
      return "Setembro";
    case 10:
      return "Outubro";
    case 11:
      return "Novembro";
    case 12:
      return "Dezembro";
    default:
      return "Não implementei ainda";
  }
}
