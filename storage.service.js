import { homedir } from 'os';
import {
    join,
    basename,
    dirname,
    extname,
    relative,
    isAbsolute,
    resolve,
    sep,
} from 'path';

const filePath = join(homedir(), 'weatherdata.json');

export default function saveKeyValue(key, value) {
    // console.log(extname(filePath));
    // console.log(relative(filePath, dirname(filePath)));
    console.log(isAbsolute(filePath));
    console.log(resolve('..'));
    console.log(sep);
}
