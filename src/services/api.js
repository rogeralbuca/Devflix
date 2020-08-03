import axios from 'axios';
import config from '../../src/config';

const alura = axios.create({ baseURL: config.URL_API_ALURA });

alura.interceptors.request.use(function (config) {
    document.body.classList.add('loading-indicator');
    const token = window.localStorage.token;
    if (token) {
        config.headers.Authorization = `token ${token}`
    }
    return config
}, function (error) {
    return Promise.reject(error);
});

alura.interceptors.response.use(function (response) {
    (function(){
        setTimeout(() => {
            document.body.classList.remove('loading-indicator');
        }, 1000);
    }())
    return response;
}, function (error) {
    return Promise.reject(error);
});

const devflix = axios.create({ baseURL: config.URL_API_DEVFLIX });

export default { alura, devflix };
