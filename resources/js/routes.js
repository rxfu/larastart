export default [{
    path: '/',
    component: require('./layouts/App.vue'),
    children: [{
        path: '/signin',
        name: 'signin',
        component: require('./pages/Signin.vue'),
        meta: { title: 'Sign in' }
    }, {
        path: '*',
        redirect: '/signin'
    }]
}];
