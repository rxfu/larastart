/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import '@babel/polyfill';
import 'es6-promise/auto';

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Axios from 'axios';
import VueBodyClass from 'vue-body-class';
import { ValidationProvider, ValidationObserver, localize, extend } from 'vee-validate/dist/vee-validate.full.esm';
import zh_CN from 'vee-validate/dist/locale/zh_CN.json';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import routes from './routes';
import store from './store';

// 解决 webpack 异步组件无法解析的问题，此问题为 webpack 的官方bug
import '../sass/empty.scss';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

library.add(fas);
dom.watch();

localize('zh_CN', zh_CN);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./components/', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0].toLowerCase(), files(key).default))

Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    mode: 'history',
    base: process.env.MIX_BASE_URL,
    routes
});

const vueBodyClass = new VueBodyClass(routes);

router.beforeEach((to, from, next) => {
    vueBodyClass.guard(to, next);

    if (to.name !== 'Login' && !to.meta.isAuthenticated) {
        if (store.getters.auth.isLoggedIn) {
            next();
        } else {
            next({ name: 'Login' });
        }
    } else {
        next();
    }
});

Axios.defaults.baseURL = 'http://127.0.0.1:8000/';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

Axios.interceptors.request.use(
    config => {
        store.dispatch('showLoading');

        // if (localStorage.access_token) {
        //     config.headers.Authorization = localStorage.access_token;
        // } else {
        //     router.push({ name: 'Login' })
        // }

        return config;
    },  error => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    config => {
        store.dispatch('hideLoading');
        
        return config;
    }, response => {
        return response;
    }, error => {
        // console.log(error);
        // if (error.response) {
        //     switch (error.response.status) {
        //         case 401:
        //             store.dispatch('logout');
        //     }
        // }

        return Promise.reject(error);
    }
);

const app = new Vue({
    router,
    store,
    el: '#app'
});
