import axios, { Method } from 'axios';
const URL = "https://openaccess-api.clevelandart.org/api/artworks/";

const fetch = (method: Method) => async (url: string, data?: any) =>
    await axios({
        method,
        url: `${URL}${url}`,
        data,
    });

const api = {
    get: fetch("GET"),
}

export default api;