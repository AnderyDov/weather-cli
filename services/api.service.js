import axios from 'axios';
import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

async function getWeather(city) {
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error(
            'Не задан ключ апи, зайте его через команду -t [API_KEY]',
        );
    }
    const { data } = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
            params: {
                q: city,
                appid: token,
                lang: 'ru',
                units: 'metric',
            },
        },
    );
    return data;
    // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    // url.searchParams.append('q', city);
    // url.searchParams.append('appid', token);
    // url.searchParams.append('lang', 'ru');
    // url.searchParams.append('units', 'metric');

    // https.get(url, (response) => {
    //     console.log('HTTPS');
    //     let result = '';
    //     response.on('data', (chunk) => {
    //         result += chunk;
    //     });

    //     response.on('end', () => {
    //         console.log(result);
    //     });
    // });
}
export { getWeather };
