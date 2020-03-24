import Axios from "axios";
import store from './store';
import router from './router';
import config from './config';

Axios.defaults.baseURL = config.baseURL;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Axios.defaults.withCredentials = true;

Axios.interceptors.request.use(
    config => {
        store.dispatch('showLoading');

        if (sessionStorage.getItem('Authorization')) {
            config.headers.Authorization = sessionStorage.getItem('Authorization');
        }

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

        return Promise.resolve(response);
    },
    error => {
        store.dispatch('hideLoading');

        if (error.response) {
            store.dispatch('flashError', error.response.data.message);
            store.dispatch('flashInvalid', error.response.data.data);

            switch (error.response.status) {
                case 401:
                    if (router.currentRoute.name !== 'Login'){
                        router.replace({
                            name: 'Login'
                        });
                    }
            }
        }

        return Promise.reject(error);
    }
);
