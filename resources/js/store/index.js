import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modules = {};
const req = require.context('./modules', true, /.*\.js$/i);

req.keys().forEach(file => {
	const name = file.replace(/(^.\/)|(\.js$)/g, '');

	modules[name] = req(file).default;
});

export default new Vuex.Store({
	modules,
	strict: process.env.NODE_ENV !== 'production'
});