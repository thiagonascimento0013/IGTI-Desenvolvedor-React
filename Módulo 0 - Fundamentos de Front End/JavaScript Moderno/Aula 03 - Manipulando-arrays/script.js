// 1. for...of

for (let item of usPresidents) {
  //console.log(item.president);
}

// 2. forEach
usPresidents.forEach((item, index) => {
  //console.log(`${index}: ${item.president}`);
});

// 3. map: DESCRIÇÃO, CRIANDO UM NOVO ARRAY
let names = usPresidents.map((item) => item.president + ' ' + item.took_office);


// 4.filter: FILTRA ELEMENTOS DO ARRAY, CRIANDO UM NOVO ARRAY
let republicans = usPresidents.filter((item) => item.party == "Republican");


// 5. find: ENCONTRA O PRIMEIRO ELEMENTO COM BASE EM ALGUM CRITÉRIO
let p1 = usPresidents.find((item) => item.party =="Democratic");

// 6. sort: FUNÇÃO DE COMPARAÇÃO, ORDENA O ARRAY ONDE FOI CHAMADA A FUNÇÃO
usPresidents.sort((i1, i2) => {
  if (i1.birth_year < i2.birth_year){
    return -1;
  }else if (i1.presbirth_yearident > i2.birth_year){
    return 1;
  }else {
    return 0;
  }
});