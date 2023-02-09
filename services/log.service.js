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

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${res.name}
		${icon}  ${res.weather[0].description}
		Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
		Влажность: ${res.main.humidity}%
		Скорость ветра: ${res.wind.speed}
		`,
    );
};

export { printError, printSuccess, printHelp, printWeather };
