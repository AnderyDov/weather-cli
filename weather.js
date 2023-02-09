#!usr/bin/emv node
import getArgs from './helpers/args.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

async function saveToken(token) {
    try {
        await saveKeyValue('token', token);
        printSuccess('Токен сохранён');
    } catch (error) {
        printError(error.message);
    }
}

function initCLI() {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
    }
    if (args.t) {
        return saveToken(args.t);
    }
}

initCLI();
