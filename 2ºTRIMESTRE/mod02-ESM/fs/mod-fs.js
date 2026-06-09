
const fs = require('fs');

const arquivo = fs.readFileSync(__dirname+'/festa.md', 'utf-8');
console.log(arquivo);