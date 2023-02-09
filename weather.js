#!usr/bin/emv node
import getArgs from './helpers/args.js';
import { getWeather, getIcon } from './services/api.service.js';
import {
    printHelp,
    printError,
    printSuccess,
    printWeather,
} from './services/log.service.js';
import {
    getKeyValue,
    saveKeyValue,
    TOKEN_DICTIONARY,
} from './services/storage.service.js';

async function saveToken(token) {
    if (!token.length) {
        printError('не передан токен');
        return;
    }
    try {
        await saveKeyValue('token', token);
        printSuccess('Токен сохранён');
    } catch (error) {
        printError(error.message);
    }
}

async function saveCity(city) {
    if (!city.length) {
        printError('не передан город');
        return;
    }
    try {
        await saveKeyValue('city', city);
        printSuccess('Город сохранён');
    } catch (error) {
        printError(error.message);
    }
}

async function getForcast() {
    try {
        const city =
            process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon));
    } catch (e) {
        if (e?.response?.status === 404) {
            printError('Неверно указан город');
        } else if (e?.response?.status === 401) {
            printError('Неверно указан токен');
        } else {
            printError(e.message);
        }
    }
}

function initCLI() {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    getForcast();
}

initCLI();
