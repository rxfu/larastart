export default [{
    path: '/',
    component: resolve => require(['./layouts/Layout.vue'], resolve),
    meta: {
        bodyClass: 'sidebar-mini'
    },
    children: [{
        path: '/dashboard',
        name: 'Dashboard',
        component: resolve => require(['./pages/Dashboard.vue'], resolve),
        meta: {
            title: '首页'
        }
    }]
}, {
    path: '/signin',
    name: 'Signin',
    component: resolve => require(['./pages/Signin.vue'], resolve),
    meta: {
        title: '登录',
        bodyClass: 'layout-top-nav'
    }
}];
