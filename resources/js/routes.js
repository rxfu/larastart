export default [{
    path: '/',
    component: resolve => require(['./layouts/Layout.vue'], resolve),
    meta: {
        bodyClass: 'sidebar-mini'
    },
    children: [{
        path: '/dashboard',
        name: 'Dashboard',
        component: resolve => require(['./views/home/Dashboard.vue'], resolve),
        meta: {
            title: '首页'
        }
    }]
}, {
    path: '/signin',
    name: 'Signin',
    component: resolve => require(['./views/auth/Signin.vue'], resolve),
    meta: {
        title: '登录',
        bodyClass: 'layout-top-nav'
    }
}];
