const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try {
    const arquivo = fs.readaFileySync(path.join(__dirname,'/festa.md'), 'utf-8');
    console.log(chalk.green('Arquivo carregado com sucesso'))
    console.log(arquivo);
} cacth (erro) {
    console.log(chalk.red("Não deu certo:"))
    console.log(erro.message)
}