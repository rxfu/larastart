export default [{
    path: '/',
    name: 'Home',
    component: resolve => require(['./pages/layouts/App.vue'], resolve),
    meta: {
        bodyClass: 'sidebar-mini',
        isAuthenticated: false
    },
    children: [{
        path: '/dashboard',
        name: 'Dashboard',
        component: resolve => require(['./pages/home/Dashboard.vue'], resolve),
        meta: {
            isAuthenticated: false
        }
    }, {
        path: '/404',
        name: '404',
        component: resolve => require(['./pages/error/404.vue'], resolve),
        meta: {
            isAuthenticated: false
        }
    }]
}, {
    path: '/auth',
    name: 'Auth',
    component: resolve => require(['./pages/layouts/Page.vue'], resolve),
    meta: {
        bodyClass: 'layout-top-nav',
        isAuthenticated: false
    },
    children: [{
        path: '/login',
        name: 'Login',
        component: resolve => require(['./pages/auth/Login.vue'], resolve),
    }]
}, {
    path: '*',
    redirect: '/auth/login'
}];
