export default [{
    path: '/',
    component: resolve => require(['./layouts/App.vue'], resolve),
    children: [{
        path: 'signin',
        name: 'Signin',
        component: resolve => require(['./pages/Signin.vue'], resolve),
        meta: { 
            title: '登录',
            bodyClass: 'login-page'
        }
    }]
}];
