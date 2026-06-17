const fs = require('fs');
const path = require('path')
const chalk = require('chalk').default

try {
    const arquivo = fs.readFileySync(path.join(__dirname, '/festa.md'), 'utf-8');
    console.log(chalk.green("🎉 Arquivo carregado com sucesso!"))
    console.log(arquivo);
} cacth (erro) {
    console.log(chalk.bgYellowBright.red('☢️ Atenção, erro a frente'))
    console.log(chalk.red("🛑 Deu errado:"))
    console.log(erro.message)
}