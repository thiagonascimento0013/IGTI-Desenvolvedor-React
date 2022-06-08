import {format, addDays, formatDistance, compareAsc, compareDesc, isValid, parse} from 'date-fns'
import { es, pt } from 'date-fns/locale/index.js'

//Formatação de data -> Consultar a documentação para outros padrões
let today = new Date();
console.log(today);

let todayFormatted = format(today, "dd.MM.yyyy");
console.log(todayFormatted);

let todayFormatted2 = format(today, "PPPP");
console.log(todayFormatted2);

//Importação de dados da Espanha
let todayFormatted3 = format(today, "PPPP", {locale:es});
console.log(todayFormatted3);

//Importação de dados do Brasil
let todayFormatted4 = format(today, "PPPP", {locale:pt});
console.log(todayFormatted4);

//Operações com datas
let todaySummed = addDays(today, 3);
let todaySummed2 = addDays(todaySummed, 3);

console.log(today);
console.log(todaySummed);
console.log(todaySummed2);


//Diferença entre datas
let endDate = new Date(2022, 12, 31);
let difBetweenDates = formatDistance(today, endDate, {locale: pt});
console.log(`Faltam ${difBetweenDates} para o Revellion`);


//Ordenar datas em um array
let d1 = new Date("2000, 06, 05");
let d2 = new Date("2005, 06, 05");
let d3 = new Date("2010, 06, 05");
let d4 = new Date("2015, 06, 05");
let d5 = new Date("2020, 06, 05");

let datas = [d1, d2, d3, d4, d5];

let sortAscDatas = datas.sort(compareAsc);
console.log(sortAscDatas);

let sortDescDatas = datas.sort(compareDesc);
console.log(sortDescDatas);


//Validação de datas
let invalidDate = parse('30-02-2022', 'dd.MM.yyyy', new Date());

console.log(isValid(invalidDate));