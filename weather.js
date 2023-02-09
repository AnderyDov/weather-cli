#!usr/bin/emv node
import getArgs from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

async function saveToken(token) {
    if (!token.length) {
        printError('не передан токен');
        return;
    }
    try {
        await saveKeyValue('token', TOKEN_DICTIONARY.token);
        printSuccess('Токен сохранён');
    } catch (error) {
        printError(error.message);
    }
}

function initCLI() {
    console.log(process.env);
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
    }
    if (args.t) {
        return saveToken(args.t);
    }
    // getWeather('Surgut');
}

initCLI();
