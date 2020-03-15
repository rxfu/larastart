import Axios from "axios";
import store from './store';
import config from './config';

Axios.defaults.baseURL = config.baseURL;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Axios.defaults.withCredentials = true;

Axios.interceptors.request.use(
    config => {
        store.dispatch('showLoading');

        // if (localStorage.access_token) {
        //     config.headers.Authorization = localStorage.access_token;
        // } else {
        //     router.push({ name: 'Login' })
        // }

        let token = sessionStorage.getItem('access_token');

        return config;
    },
    error => {
        store.dispatch('hideLoading');

        store.dispatch('flashError', '请求超时');

        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    response => {
        store.dispatch('hideLoading');
        
        store.dispatch('flashSuccess', response.data.message);

        return response;
    },
    error => {
        store.dispatch('hideLoading');
        
        store.dispatch('flashError', error.response.data.message);
        store.dispatch('flashInvalid', error.response.data.data);

        return Promise.resolve(error.response);
    }
);
