const fs = require('fs');

const banco = fs.readFileSync('database.csv', 'utf8');

const regex = /Anna/i;

console.log(regex.test(banco));
console.log(banco.match(regex));