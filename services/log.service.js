import chalk from 'chalk';
import dedent from 'dedent-js';

function printError(error) {
    console.log(chalk.bgRed(' ERROR ') + error);
}

function printSuccess(message) {
    console.log(chalk.bgGreen(' Success ') + message);
}

function printHelp() {
    console.log(
        dedent(`${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [SYTY] для установуи города
        -h для вывода помощи
        -t [API_KEY] сохранения токена
        `),
    );
}

export { printError, printSuccess, printHelp };
