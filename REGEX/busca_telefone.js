const fs = require('fs');

const banco = fs.readFileSync('database.csv', 'utf8');

const regexTelefone = /\(\d{2}\)\s\d{4,5}-\d{4}/g;
const matchTelefone = banco.match(regexTelefone);

console.log(matchTelefone);

const patternCelular = /\(\d{2}\)\s9\d{4}-\d{4}/g;
const matchCelular = banco.match(patternCelular);

console.log(matchCelular);