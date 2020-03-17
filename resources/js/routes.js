export default [{
    path: '/',
    name: 'Home',
    component: resolve => require(['./pages/layouts/App.vue'], resolve),
    meta: {
        bodyClass: 'sidebar-mini',
        requiresAuth: true
    },
    children: [{
        path: '/dashboard',
        name: 'Dashboard',
        component: resolve => require(['./pages/home/Dashboard.vue'], resolve),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/404',
        name: '404',
        component: resolve => require(['./pages/error/404.vue'], resolve),
        meta: {
            requiresAuth: true
        }
    }]
}, {
    path: '/auth',
    name: 'Auth',
    component: resolve => require(['./pages/layouts/Page.vue'], resolve),
    meta: {
        bodyClass: 'layout-top-nav',
        requiresAuth: false
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
