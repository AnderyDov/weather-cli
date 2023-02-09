import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';
// import {
//     join,
//     basename,
//     dirname,
//     extname,
//     relative,
//     isAbsolute,
//     resolve,
//     sep,
// } from 'path';
// const filePath = join(homedir(), 'weather-data.json');

// export default function saveKeyValue(key, value) {
// console.log(extname(filePath));
// console.log(relative(filePath, dirname(filePath)));
// console.log(isAbsolute(filePath));
// console.log(resolve('..'));
// console.log(sep);
// }
const filePath = join(homedir(), 'weather-data.json');

const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city',
};

async function isExist(path) {
    try {
        await promises.stat(path);
        return true;
    } catch (error) {
        return false;
    }
}

async function saveKeyValue(key, value) {
    let data = {};
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file);
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
}

async function getKeyValue(key) {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key];
    } else {
        return undefined;
    }
}

export { getKeyValue, saveKeyValue, TOKEN_DICTIONARY };
