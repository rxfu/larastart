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
import VueBodyClass from 'vue-body-class';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import routes from './routes';

// 解决 webpack 4 异步组件无法解析的问题
import '../sass/empty.scss';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

library.add(faUser, faLock);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('navigation', require('./components/Navigation.vue').default);
Vue.component('foot', require('./components/Foot.vue').default);

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
    var title = to.meta.title || 'Home';
    document.title = title + ' | ' + process.env.MIX_APP_NAME;

    vueBodyClass.guard(to, next);

    next();
});

const app = new Vue({
    router,
    el: '#app'
});
