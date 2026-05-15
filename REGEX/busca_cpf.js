const fs = require('fs');
const bancoCsv = fs.readFileSync('database.csv', 'utf8');
const banco = fs.readFileSync('database.csv', 'utf8');

const patternCPF = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g;  //{}significa quantificadores ai eu adiciono um valor da quantidade que desejo
//e [] significa algo especifico que desejo "destacar" elas se chamam de classes de caracteres, e o ? significa que o caractere anterior é opcional, ou seja, pode ou não aparecer. O g é a flag global, que indica que a busca deve ser feita em toda a string, e não apenas na primeira ocorrência.
const matchCPF = banco.match(patternCPF);
console.log(matchCPF);